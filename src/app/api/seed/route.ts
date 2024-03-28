import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // * DELETE * FROM todo;

  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del poder" },
      { description: "Piedra del espacio" },
      { description: "Piedra del tiempo" },
      { description: "Piedra del realidad" },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
