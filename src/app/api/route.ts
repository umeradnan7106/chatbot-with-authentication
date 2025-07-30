// src/app/api/route.ts
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {
    const session = await getServerSession(authOptions);

    return NextResponse.json({ authenticated: !!session })
}