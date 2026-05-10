import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagePath = 'C:\\Users\\masti\\.gemini\\antigravity\\brain\\ff75638a-60a3-4c3d-b7b4-cb497e4360c5\\media__1778422192661.png';
  
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error reading logo file:', error);
    return new NextResponse('Logo not found', { status: 404 });
  }
}
