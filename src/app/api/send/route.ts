import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "no-reply@heo.one",
      to: ["heojay0309@gmail.com"],
      subject: `Contact from Jay's portfolio`,
      react: EmailTemplate({ message: message, email: email }),
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("error", error);
    return Response.json({ error }, { status: 500 });
  }
}
