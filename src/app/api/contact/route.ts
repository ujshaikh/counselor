import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import validation from "../utils/validations";

dotenv.config()

const transporter = nodemailer.createTransport({
  port: 465,
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  secure: true
})

// Handles GET requests to /api
export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // Sanitisation of body
  const { error, value } = validation.contact.validate(await request.json())
  if (error) {
    return NextResponse.json({message: 'Failed to submit your data, please try again', error: error.message}, {status: 400})
  }
  const {name, email, service, message} = value

  const data = {
    from: process.env.SMTP_USER,
    to: process.env.RECIPEINTS,
    subject: `Message from ${email}`,
    text: `${message}  | Sent from: ${name}<${email}>`,
    html: `<p>Selected service: ${service}</p><div>${message}</div><p>Sent from: ${name}<${email}></p>`
  }

  try {
    await transporter.sendMail(data)
    return NextResponse.json({ message: "Successfuly sent. Thank you!" });
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Something went wrong! Please try again later.", error }, { status: 500 });
  }
}