"use client";
import Image from "next/image";
import Card from "./wrapper/Card";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { voteAction } from "@/actions/voteAction";

const Vote = () => {
  const [upCount, setUpCount] = useState(0); // Stores upvote percentage
  const [downCount, setDownCount] = useState(0); // Stores downvote percentage
  const [voted, setVoted] = useState(false); // Tracks if user has voted
  const [currentVote, setCurrentVote] = useState(""); // Tracks the user's current vote ('happy' or 'sad')
  const [showDownVote, setShowDownVote] = useState(false); // To delay downvote animation
  const [animateUpVote, setAnimateUpVote] = useState("w-[0%]"); // Animate upvote
  const [animateDownVote, setAnimateDownVote] = useState("w-[0%]"); // Animate downvote

  const handleVoteAction = async (voteType: string) => {
    const result = await voteAction(voteType); // Get result from vote action

    if (result.total && result.up && result.down) {
      const newUpCount = Math.round((result.up / result.total) * 100);
      const newDownCount = 100 - newUpCount; // Ensures that upCount + downCount = 100

      setUpCount(newUpCount); // Update upvote percentage
      setDownCount(newDownCount); // Update downvote percentage
    }
    setCurrentVote(voteType); // Track the vote type (happy/sad)
    setVoted(true); // Set the voted state to true
    // Add delay to show the downVote bar
    setTimeout(() => {
      setShowDownVote(true);
    }, 100); // 500ms delay before showing downVote
  };
  useEffect(() => {
    if (voted) {
      // Trigger width transitions after voting
      setAnimateUpVote(`w-[${upCount}%]`);
      setAnimateDownVote(`w-[${downCount}%]`);
    }
  }, [upCount, downCount, voted]);
  return (
    <Card
      row={1}
      col={1}
      order={1}
      className="hidden laptop:col-start-1 laptop:row-start-1 laptop:block"
    >
      {/* Voting buttons */}
      <div
        className={`flex h-full w-full items-center justify-center gap-[16px] transition-opacity duration-300 ${
          voted ? "hidden opacity-0" : "visible opacity-100"
        }`}
      >
        <button onClick={() => handleVoteAction("happy")}>
          <Image src={"/etc/smile.svg"} alt={"happy"} width={64} height={64} />
        </button>
        <button onClick={() => handleVoteAction("sad")}>
          <Image src={"/etc/sad.svg"} alt={"sad"} width={64} height={64} />
        </button>
      </div>

      {/* Vote results display */}
      <div
        className={`h-full w-full flex-col items-center justify-center gap-[16px] p-[16px] transition-all duration-300 ${
          voted ? "flex" : "hidden"
        }`}
      >
        {/* Upvote (happy) display */}
        <div className="flex w-full items-center gap-[8px]">
          <Image src={"/etc/smile.svg"} alt={"happy"} width={32} height={32} />
          <div className="relative flex h-full flex-1 items-center justify-start rounded-[4px] bg-[#D9D9D9] bg-opacity-30">
            <div
              className={`flex h-full gap-[8px] rounded-[4px] will-change-auto ${
                showDownVote ? `${animateUpVote}` : "w-[0%]"
              } bg-white bg-opacity-30 transition-all delay-300 duration-500`}
            >
              {showDownVote && (
                <span
                  className={`flex h-full w-full flex-1 items-center justify-center text-[12px] text-white text-opacity-60`}
                >
                  {upCount}%
                  {currentVote === "happy" && (
                    <FaCheck className="self-center" />
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Downvote (sad) display */}
        <div className="flex w-full items-center gap-[8px]">
          <Image src={"/etc/sad.svg"} alt={"sad"} width={32} height={32} />
          <div className="relative flex h-full flex-1 items-center justify-start rounded-[4px] bg-[#D9D9D9] bg-opacity-30">
            <div
              className={`flex h-full gap-[8px] rounded-[4px] will-change-auto ${
                showDownVote ? `${animateDownVote}` : "w-[0%]"
              } bg-white bg-opacity-30 transition-all delay-300 duration-500`}
            >
              {showDownVote && (
                <span
                  className={`flex h-full w-full flex-1 items-center justify-center text-[12px] text-white text-opacity-60`}
                >
                  {downCount}%
                  {currentVote === "sad" && <FaCheck className="self-center" />}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Vote;
