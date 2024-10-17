"use server";

export const contactAction = async (formData: FormData) => {
  const { message, email } = Object.fromEntries(formData);
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send`, {
    method: "POST",
    body: JSON.stringify({
      message: message as string,
      email: email as string,
    }),
  });
  const data = await response.json();
  return {
    data,
  };
};
