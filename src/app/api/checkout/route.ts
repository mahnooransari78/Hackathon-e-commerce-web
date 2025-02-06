import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, address, city, country, postalCode, phone } = await req.json();

  const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY;
  const SHIPENGINE_API_URL = "https://api.shipengine.com/v1/labels";

  if (!SHIPENGINE_API_KEY) {
    return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
  }

  // ✅ Validate US ZIP Code
  if (country === "US" && !/^\d{5}(-\d{4})?$/.test(postalCode)) {
    return NextResponse.json({ error: "Invalid US ZIP Code" }, { status: 400 });
  }

  try {
    const response = await fetch(SHIPENGINE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": SHIPENGINE_API_KEY,
      },
      body: JSON.stringify({
        shipment: {
          service_code: "usps_priority_mail",
          ship_to: {
            name,
            address_line1: address,
            city_locality: city,
            state_province: "CA",
            postal_code: postalCode,
            country_code: country,
            phone: phone || "000-000-0000",
          },
          ship_from: {
            name: "Your Store",
            address_line1: "123 Business St.",
            city_locality: "Los Angeles",
            state_province: "CA",
            postal_code: "90001",
            country_code: "US",
            phone: "123-456-7890",
          },
          packages: [
            {
              weight: {
                value: 1,
                unit: "pound",
              },
            },
          ],
        },
      }),
    });

    const data = await response.json();
    console.log("🚀 API Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error("❌ Shipment Error:", data);
      throw new Error(data.errors?.[0]?.message || "Failed to create shipment");
    }

    return NextResponse.json({
      success: true,
      trackingNumber: data.tracking_number,
      labelUrl: data.label_download?.href || "No label URL available",
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("🚨 API Error:", errorMessage);
    
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}


// import { NextRequest } from "next/server";

// export async function POST(req: NextRequest) {
//     const data = await req.json();
//     console.log('Checkout Data:', data);
//     return Response.json({ message: 'Checkout successful!' });
//   }
  