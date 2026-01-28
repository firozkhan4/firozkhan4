import dbConnect from "@/app/lib/db";
import { NextResponse } from "next/server";
import Certificate from "@/app/models/Certificate"


export async function GET() {
  await dbConnect()
  try {
    const certificate = await Certificate.find({})
    return NextResponse.json(certificate);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

