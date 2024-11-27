"use client";

import { useState } from "react";
import Image from "next/image";
import { contactAction } from "@/actions/contactAction";
import FormResult from "@/components/contacts/FormResult";

const FormButton = ({
  isSending,
  handleClick,
}: {
  isSending: boolean;
  handleClick: () => void;
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        role="submit"
        className="flex h-[40px] w-full items-center justify-center gap-[8px] rounded-[20px] bg-gray-600 hover:bg-opacity-90 active:bg-opacity-80"
      >
        {isSending ? (
          <>
            <span className="text-[16px] font-[800] leading-[24px] text-white">
              Sending...
            </span>
            <div className="flex items-center justify-center">
              <svg
                className="h-[16px] w-[16px] animate-spin"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50,50 m 0,-45 a 45,45 0 1,0 0,90 a 45,45 0 1,0 0,-90"
                  stroke="white"
                  strokeWidth="10"
                  strokeDasharray="210"
                  strokeDashoffset="52"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <span className="text-[16px] font-[800] leading-[24px] text-white">
              Send
            </span>
            <Image src={"/arrow.svg"} alt={"arrow"} height={10} width={12} />
          </>
        )}
      </button>
    </>
  );
};

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [didSend, setDidSend] = useState<boolean | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmailAction = async (formData: FormData) => {
    // await handleClick();
    setIsSending(true);

    const res = await contactAction(formData);
    setIsSending(false);
    if (res.data.id) {
      setDidSend(true);
    } else {
      setDidSend(false);
    }
  };

  const handleClick = () => {
    setIsSending(true);
  };

  return (
    <section
      id={"contact"}
      className="flex h-full min-h-[640px] snap-start flex-col items-center justify-center gap-[64px]"
    >
      <div className="rounded-3xl bg-white p-[32px] text-black shadow-lg drop-shadow-lg">
        {didSend === null ? (
          <div className="flex h-full w-full max-w-[640px] flex-col justify-center gap-[32px]">
            <div className="text-[32px] font-[600] leading-[48px] tracking-wider text-black text-opacity-80">
              Let&apos;s Get in Touch!
            </div>
            <form
              action={sendEmailAction}
              className="flex w-full flex-col gap-[32px] tablet:min-w-[640px]"
            >
              <div className="flex flex-col justify-center gap-[8px] border-b pb-[8px]">
                <label>Email</label>
                <input
                  name="email"
                  value={email}
                  placeholder="Example@email.com"
                  className="text-[16px] font-[400] leading-[24px] outline-hidden ring-0 placeholder:opacity-60"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-center gap-[8px] border-b pb-[8px]">
                <label className="text-[12px] font-[400] leading-[16px]">
                  Message
                </label>
                <input
                  name="message"
                  value={message}
                  placeholder="Lorem"
                  className="text-[16px] font-[400] leading-[24px] outline-hidden ring-0 placeholder:opacity-60"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <FormButton isSending={isSending} handleClick={handleClick} />
            </form>
          </div>
        ) : (
          <FormResult didSend={didSend} setDidSend={setDidSend} />
        )}
      </div>
    </section>
  );
};
export default Contact;
