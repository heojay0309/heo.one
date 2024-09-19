'use client';
import Image from 'next/image';
import Card from './wrapper/Card';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { voteAction } from '@/actions/voteAction';

const Vote = () => {
  const [upCount, setUpCount] = useState(0); // Stores upvote percentage
  const [downCount, setDownCount] = useState(0); // Stores downvote percentage
  const [voted, setVoted] = useState(false); // Tracks if user has voted
  const [currentVote, setCurrentVote] = useState(''); // Tracks the user's current vote ('happy' or 'sad')
  const [showDownVote, setShowDownVote] = useState(false); // To delay downvote animation
  const [animateUpVote, setAnimateUpVote] = useState('w-[0%]'); // Animate upvote
  const [animateDownVote, setAnimateDownVote] = useState('w-[0%]'); // Animate downvote

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
    <Card row={1} col={1} order={1} className="hidden laptop:block">
      {/* Voting buttons */}
      <div
        className={`flex items-center justify-center w-full gap-[16px] h-full transition-opacity duration-300 ${
          voted ? 'opacity-0 hidden' : 'opacity-100 visible'
        }`}
      >
        <button onClick={() => handleVoteAction('happy')}>
          <Image src={'/etc/smile.svg'} alt={'happy'} width={64} height={64} />
        </button>
        <button onClick={() => handleVoteAction('sad')}>
          <Image src={'/etc/sad.svg'} alt={'sad'} width={64} height={64} />
        </button>
      </div>

      {/* Vote results display */}
      <div
        className={`gap-[16px] flex-col p-[16px] justify-center items-center h-full w-full transition-all duration-300 ${
          voted ? 'flex ' : 'hidden'
        }`}
      >
        {/* Upvote (happy) display */}
        <div className="gap-[8px] flex items-center w-full">
          <Image src={'/etc/smile.svg'} alt={'happy'} width={32} height={32} />
          <div className="rounded-[4px] flex-1 bg-[#D9D9D9] bg-opacity-30 relative flex items-center justify-start h-full">
            <div
              className={`flex h-full gap-[8px] rounded-[4px] will-change-auto ${
                showDownVote ? `${animateUpVote}` : 'w-[0%]'
              } bg-white bg-opacity-30 transition-all delay-300 duration-500`}
            >
              {showDownVote && (
                <span
                  className={`flex 
                items-center w-full flex-1 justify-center h-full text-[12px] text-white text-opacity-60 `}
                >
                  {upCount}%
                  {currentVote === 'happy' && (
                    <FaCheck className=" self-center" />
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Downvote (sad) display */}
        <div className="gap-[8px] flex items-center w-full ">
          <Image src={'/etc/sad.svg'} alt={'sad'} width={32} height={32} />
          <div className="rounded-[4px] flex-1 bg-[#D9D9D9] bg-opacity-30 relative flex items-center justify-start h-full">
            <div
              className={`flex h-full gap-[8px] rounded-[4px] will-change-auto ${
                showDownVote ? `${animateDownVote}` : 'w-[0%]'
              } bg-white bg-opacity-30 transition-all delay-300 duration-500`}
            >
              {showDownVote && (
                <span
                  className={`flex 
                items-center w-full flex-1 justify-center h-full text-[12px] text-white text-opacity-60 `}
                >
                  {downCount}%
                  {currentVote === 'sad' && (
                    <FaCheck className=" self-center" />
                  )}
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
