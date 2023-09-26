import { NextResponse } from "next/server";

//Verify ReCaptcha
export async function POST(req: Request) {
  //get recaptcha response from request body
  const { recaptchaResponse }: { recaptchaResponse: string } = await req.json();

  //Get verification url
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;

  try {
    //get request to the verification url
    const response = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    //Get the score from the response data
    //If score < 0.7, fail verification
    const resData = await response.json();
    if (!resData.success || resData.score < 0.7) {
      return NextResponse.json(
        { error: "ReCaptcha verification failed" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "ReCaptcha verification passed" },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: "Something wrong with ReCaptcha verification" },
      { status: 500 }
    );
  }
}
