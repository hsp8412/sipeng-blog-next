import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import { sendMessage } from "@/app/utils/email";
import prisma from "../../../../prisma/prisma";

//schema for validating input message
const schema = Joi.object({
  firstName: Joi.string().max(255).required(),
  lastName: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  message: Joi.string().max(2000).required(),
});

export async function POST(req: NextRequest) {
  //get input and validate
  const { firstName, lastName, email, message } = await req.json();
  const { error } = schema.validate({ firstName, lastName, email, message });
  if (error)
    return NextResponse.json(
      { error: error.details[0].message },
      { status: 400 }
    );

  try {
    await sendMessage(firstName, lastName, message, email);
  } catch (e) {
    return NextResponse.json(
      { error: "Error when sending the message" },
      { status: 500 }
    );
  }

  return NextResponse.json({ msg: "Message sent" });
}
