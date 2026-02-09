import dbConnect from "@/app/lib/db";
import { NextResponse, NextRequest } from "next/server";
import BlogPost from "@/app/models/BlogPost";

// Use the interface you defined to keep things type-safe
interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams // Use the Promise interface here
) {
  try {
    await dbConnect();

    const { id } = await params;

    const blogPost = await BlogPost.findById(id);

    if (!blogPost) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blogPost);

  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
