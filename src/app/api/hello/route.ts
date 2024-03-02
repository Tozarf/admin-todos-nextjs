import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ hola: "mundo" });
}

export async function POST(req: Request) {
  return NextResponse.json({ title: "POST method" }, { status: 201 });
}
