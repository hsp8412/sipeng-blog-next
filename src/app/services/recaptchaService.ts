import axios from "axios";

const urlBase = process.env.NEXT_PUBLIC_API_BASE_URL;
export const callRecaptcha = async (token: string) => {
  try {
    const response = await axios.post(`${urlBase}/recaptcha`, {
      recaptchaResponse: token,
    });
  } catch (e: any) {
    throw e;
  }
};
