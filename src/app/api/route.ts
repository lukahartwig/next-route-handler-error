import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

const data = fs.readFileSync(
  path.join(process.cwd(), "file-does-not-exist.txt"),
  "utf8"
);

export async function GET() {
  return NextResponse.json({ data });
}
