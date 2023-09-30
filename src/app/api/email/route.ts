import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import { sendMessage } from "@/app/utils/email";
import prisma from "../../../../prisma/prisma";
import { verifyRecaptcha } from "@/app/utils/recaptcha";

//schema for validating input message
const schema = Joi.object({
  firstName: Joi.string().max(255).required(),
  lastName: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  message: Joi.string().max(2000).required(),
  token: Joi.string().required(),
});

export async function POST(req: NextRequest) {
  //get input and validate
  const { firstName, lastName, email, message, token } = await req.json();
  const { error } = schema.validate({
    firstName,
    lastName,
    email,
    message,
    token,
  });
  if (error)
    return NextResponse.json(
      { error: error.details[0].message },
      { status: 400 }
    );

  //verify recaptcha token
  let recaptchaVerified = false;
  try {
    recaptchaVerified = await verifyRecaptcha(token);
    if (!recaptchaVerified) {
      return NextResponse.json(
        {
          error: "ReCaptcha verification failed",
        },
        { status: 400 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      {
        error: "ReCaptcha verification failed",
      },
      { status: 500 }
    );
  }

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
