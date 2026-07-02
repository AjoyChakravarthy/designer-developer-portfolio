import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "content/designs.json");

export function GET() {
  const data = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

export async function PUT(request: Request) {
  const body = await request.json();
  fs.writeFileSync(filePath, JSON.stringify(body, null, 2));
  return NextResponse.json({ ok: true });
}
