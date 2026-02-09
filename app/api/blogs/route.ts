import dbConnect from "@/app/lib/db";
import { NextResponse } from "next/server";
import BlogPost from "@/app/models/BlogPost";


export async function GET() {
  await dbConnect()
  try {
    const res = await BlogPost.find({})
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}



