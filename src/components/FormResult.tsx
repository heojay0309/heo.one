import Image from "next/image";
interface IFormResultProps {
  didSend: boolean | null;
  setDidSend: (val: boolean | null) => void;
}
const FormResult = ({ didSend, setDidSend }: IFormResultProps) => {
  return (
    <div className="flex h-full w-full max-w-[640px] flex-col justify-center gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <div className="text-center text-[32px] font-[600] leading-[48px] tracking-wider opacity-80">
          {didSend ? "Message Successfully Sent!" : "Something Went Wrong."}
        </div>
        <div className="text-center text-[16px] leading-[24px] opacity-60">
          {didSend
            ? "Thank you for your message, I’ll try to get back to you as soon as possible!"
            : "I apologize, something must have gone wrong, please try again later!"}
        </div>
      </div>
      <button
        onClick={() => setDidSend(null)}
        className="flex h-[40px] max-w-[122px] items-center justify-center gap-[8px] self-center rounded-[20px] bg-black py-[12px] pl-[24px] pr-[32px] hover:bg-opacity-90 active:bg-opacity-80"
      >
        <Image
          src={"/arrow.svg"}
          alt={"arrow"}
          height={10}
          width={12}
          className="rotate-180"
        />
        <span className="text-[16px] font-[800] leading-[24px] text-white">
          Back
        </span>
      </button>
    </div>
  );
};

export default FormResult;
