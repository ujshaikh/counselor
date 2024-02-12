import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import validation from '../../utils/validations'

type ParamsProps = { params: { id: string } }

export async function GET(request: NextRequest, { params }: ParamsProps) {
    const defaultPath = process.env.DEFAULT_BLOG_JSON_PATH || '/data'
    const fileName = 'blogs.json'
    const filePath = path.resolve(defaultPath, fileName)
    let data = []

    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }

    const id = params.id;

    if (id) {
        data = data.find((item: any) => item.id === id)
        console.log(data)
    }

    return NextResponse.json({ message: "", data });
}

// Handles POST requests to /api
export async function POST(request: Request, { params }: ParamsProps) {
    // Sanitisation of body
    const { error, value } = validation.blogPost.validate(await request.json())
    if (error) {
        return NextResponse.json({ message: 'Failed to submit your data, please try again', error: error.message }, { status: 400 })
    }

    try {
        const id = params.id
        if (!id || id == 'undefined') {
            return NextResponse.json({ message: 'Failed to submit your data, please try again', error: 'ID is missing' }, { status: 400 })
        }

        const defaultPath = process.env.DEFAULT_BLOG_JSON_PATH || '/data'
        const fileName = 'blogs.json'

        // Add updated date
        value.date = new Date()

        const filePath = path.resolve(defaultPath, fileName)

        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            if (stats.size !== 0) {
                let contents = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
                contents = contents.map((item: any) => {
                    if(item.id === id) {
                        item = {
                            ...item,
                            ...value
                        }
                    }
                    return item
                })
                fs.writeFileSync(filePath, JSON.stringify(contents))
                return NextResponse.json({ message: "Successfuly submitted. Thank you!" });
            }
            return NextResponse.json({ message: 'Failed to submit your data, please try again', error: 'Record not found' }, { status: 404 })
        }
        throw Error()
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Something went wrong! Please try again later.", error }, { status: 500 });
    }
}