import { ConnectDB } from "@/lib/config/db"
import { NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";


// GET /api/blog
export async function GET(): Promise<NextResponse> {
  try {
    await ConnectDB();
    const blogs = await BlogModel.find();
    return NextResponse.json({ success: true, blogs });
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST /api/blog
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await ConnectDB();

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image") as File;
    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const fileName = `${timestamp}_${image.name}`;
    const filePath = `./public/${fileName}`;
    await writeFile(filePath, buffer);
    const imgUrl = `/${fileName}`;

    const authorImgFile = formData.get("authorImg") as File;
    let authorImgUrl = "";
    if (authorImgFile && typeof authorImgFile === "object") {
      const authorImgBuffer = Buffer.from(await authorImgFile.arrayBuffer());
      const authorImgName = `${timestamp}_author_${authorImgFile.name}`;
      const authorImgPath = `./public/${authorImgName}`;
      await writeFile(authorImgPath, authorImgBuffer);
      authorImgUrl = `/${authorImgName}`;
    }

    const blogData = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      category: formData.get("category")?.toString() || "",
      author: formData.get("author")?.toString() || "",
      image: imgUrl,
      authorImg: authorImgUrl,
    };

    const createdBlog = await BlogModel.create(blogData);

    return NextResponse.json({
      success: "true",
      message: "Image uploaded successfully",
      id: createdBlog._id,
      data: createdBlog,
    });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to upload blog" }, { status: 500 });
  }
}

// PUT /api/blog/:id
export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    await ConnectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    const data = await request.json(); 

    const updatedBlog = await BlogModel.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Blog updated",
      data: updatedBlog,
    });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE /api/blog/:id

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    await ConnectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    const deletedBlog = await BlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}


// I've tested the api with postman and it works fine. 

/*
📤 Image Upload Logic
🔄 Why we store in /public and not DB?
We store uploaded images in the /public folder for these reasons:

Reason	Benefit
✅ Performance	Faster static serving via HTTP
✅ Simplicity	No need for API to stream images
✅ Scalability	Keeps DB small and fast
✅ Frontend-ready	Images accessible directly via <img src="/image.png" />
✅ Extensibility	Can migrate to S3/Cloudinary with minimal changes
*/