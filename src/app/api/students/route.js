import prisma from "@/lib/prisma";

export async function GET() {
    const students = await prisma.studentTable.findMany();
    return Response.json(students, { status: 200 });
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
    return Response.json(student, { status: 201 });
}