import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { trackingNumber } = await req.json();

  const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY;
  const SHIPENGINE_TRACKING_URL = `https://api.shipengine.com/v1/tracking?carrier_code=usps&tracking_number=${trackingNumber}`;

  if (!SHIPENGINE_API_KEY) {
    return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
  }

  try {
    const response = await fetch(SHIPENGINE_TRACKING_URL, {
      method: "GET",
      headers: {
        "API-Key": SHIPENGINE_API_KEY,
      },
    });

    const data = await response.json();
    console.log("Tracking API Response:", data); // Debugging ke liye print karo

    if (!response.ok) throw new Error(data.message || "Tracking failed");

    return NextResponse.json({
      success: true,
      trackingData: {
        status_description: data.status_description || "No status available",
      },
    });
  } catch (error: unknown) {
    // Type assertion for `error`
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("API Error:", errorMessage);
    
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
