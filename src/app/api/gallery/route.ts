import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

// Handles GET requests to /api
export async function GET(request: NextRequest) {
  const galleryPath = process.env.GALLERY_PATH || './public/images/gallery/' 
  let data: string[] = []

  // Get all uploaded images to public folder
  if (fs.existsSync(galleryPath)) {
    data = fs.readdirSync(galleryPath)
    return NextResponse.json({ message: "", data });
  }
  
  return NextResponse.json({ message: "Failed to fetch all files from "+galleryPath, data });
}