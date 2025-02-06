import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { country, postalCode, weight } = await req.json();

  const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY;
  const SHIPENGINE_API_URL = "https://api.shipengine.com/v1/rates/estimate";

  if (!SHIPENGINE_API_KEY) {
    return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
  }

  try {
    const response = await fetch(SHIPENGINE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": SHIPENGINE_API_KEY,
      },
      body: JSON.stringify({
        carrier_ids: ["se-1887110"], // ShipEngine carrier ID
        from_country_code: "US",
        from_postal_code: "90001", // From Postal Code (for testing, this is the US postal code)
        to_country_code: country,  // Ensure country is in ISO code format (e.g., "PK" for Pakistan)
        to_postal_code: postalCode,  // Ensure postal code is correct
        weight: {
          value: weight,
          unit: "pound",
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API Error:", data);
      throw new Error(data?.message || "Failed to fetch rates");
    }

    // Check if rates are returned
    const shippingCost = data.rates?.[0]?.rate || "Unavailable";
    if (shippingCost === "Unavailable") {
      return NextResponse.json({ error: "Shipping cost not available for the given destination." }, { status: 404 });
    }

    return NextResponse.json({ shippingCost });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("API Error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
