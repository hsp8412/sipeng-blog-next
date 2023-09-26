import axios from "axios";

type NewMessage = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const urlBase = `${process.env.NEXT_PUBLIC_API_BASE_URL}/email`;
export const sendMessage = async ({
  firstName,
  lastName,
  email,
  message,
}: NewMessage) => {
  const res = await axios.post(urlBase, {
    firstName,
    lastName,
    email,
    message,
  });
  return res.data;
};
