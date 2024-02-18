import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import validation from "../utils/validations";

dotenv.config()

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  const defaultPath = process.env.DEFAULT_BLOG_JSON_PATH || '/data'
  const fileName = 'blogs.json'
  const filePath = path.resolve(defaultPath, fileName)
  let data = []

  const searchParams = request.nextUrl.searchParams;
  const isRecent:string | null = searchParams.get("isRecent");
  const limit:any = searchParams.get("limit");
  const onlyImgs:string | null = searchParams.get("onlyImgs")

  if (onlyImgs == 'true') {
    // Get all uploaded images to public folder
    const blogImgPath = process.env.BLOG_IMAGES_PATH || './public/images/blogs/' 
    data = fs.readdirSync(blogImgPath)
  } else {
    if(fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
  
    if (isRecent == 'true') {
      data = data.slice(Math.abs(limit) * -1)
    } else if (parseInt(limit) > 0) {
      data = data.slice(Math.abs(limit))
    }
  }
  return NextResponse.json({ message: "", data });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // Sanitisation of body
  const { error, value } = validation.blogPost.validate(await request.json())
  if (error) {
    return NextResponse.json({message: 'Failed to submit your data, please try again', error: error.message}, {status: 400})
  }

  try {
    const defaultPath = process.env.DEFAULT_BLOG_JSON_PATH || '/data'
    const fileName = 'blogs.json'
    if (!fs.existsSync(path.resolve(defaultPath))) {
      fs.mkdirSync(defaultPath, {recursive: true})
    }

    // Generate unique id, date, author
    value.id = 'id' + Math.random().toString(8).slice(2)
    value.date = new Date()

    const filePath = path.resolve(defaultPath, fileName)
    
    if(fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      let content = []
      if(stats.size !== 0) {
        content = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      }
      content.push(value)
      fs.writeFileSync(filePath, JSON.stringify(content))
    } else {
      const content = []
      content.push(value)
      fs.writeFileSync(filePath, JSON.stringify(content))
    }

    return NextResponse.json({ message: "Successfuly submitted. Thank you!" });
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Something went wrong! Please try again later.", error }, { status: 500 });
  }
}