import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = await params;
    const content = await request.json();

    const data = await prisma.studentTable.update({
        where: { id: parseInt(id) },
        data: {
            name: content.name,
            email: content.email,
            class: content.class
        }
    })

    return NextResponse.json({
        success: true,
        status: 200,
        message: "Update student successfully.",
        payload: data
    })
}
export async function GET(_, { params }) {
    const { id } = await params;
    const data = await prisma.studentTable.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json({
        success: true,
        status: 200,
        message: "Student fetched successfully.",
        payload: data
    })
}
