import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();

        const files: File | null = formData.getAll('images') as unknown as File
        if (!files || files.length === 0) {
            return NextResponse.json({ error: "No files received." }, { status: 400 });
        }

        return await processFileUploading(formData, files)
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
};

const processFileUploading = async (formData: any, files: any) => {
    for (const file of files) {
        if (file.name) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const filename = new Date().getTime() + path.extname(file.name)
            console.log(filename);

            await writeFile(
                path.join(process.cwd(), "public/images/gallery/" + filename),
                buffer
            );
        } else {
            throw new Error('File not found')
        }
    }
    return NextResponse.json({ Message: "Success", status: 201 });
}