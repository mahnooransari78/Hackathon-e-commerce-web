// import { currentUser } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const user = await currentUser();

//   if (!user || user.publicMetadata.role !== "admin") {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
//   }

//   return NextResponse.json({ secretData: "Admin-only content" });
// }
