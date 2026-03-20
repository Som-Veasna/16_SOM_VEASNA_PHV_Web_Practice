import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const students = await prisma.studentTable.findMany();
    return NextResponse.json({
        success: true,
        message: "Get student successfully.",
        payload: students,
    });
}

export async function POST(request) {
    const body = await request.json();
    const student = await prisma.studentTable.create({
        data: {
            name: body.name,
            email: body.email,
            class: body.class
        }
    });
    return NextResponse.json({
        success: true,
        message: "Create student successfully.",
        payload: student,
    });
}