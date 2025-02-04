import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // Ensure clientPromise is imported

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("urlShortner");

        // Parse the body of the request
        const { url, customUrl } = await request.json();
        // check if customUrl already exists
        const check = await collection.findOne({ customUrl });
        if (!check) {
            const data = await collection.insertOne({ url, customUrl,Number_of_visit:0 });
            // Return success response
            return NextResponse.json({ success: true, data: customUrl }, { status: 201 });
        } else {
            return NextResponse.json({ success: false, error: "Custom URL already exists" }, { status: 400 });
        }
    } catch (error) {
        // Handle errors
        console.error(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}