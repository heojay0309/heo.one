'use client';
import Image from 'next/image';
import Card from './wrapper/Card';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

const Vote = () => {
  const [upVote, setUpVote] = useState('w-[0%]');
  const [downVote, setDownVote] = useState('w-[0%]');
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    if (voted) {
      if (voted === 'happy') {
        setUpVote('w-[70%]');
        setDownVote('w-[30%]');
      } else if (voted === 'sad') {
        setUpVote('w-[70%]');
        setDownVote('w-[30%]');
      }
    }
  }, [voted]);

  return (
    <Card row={1} col={1} order={1} className="hidden laptop:block">
      <div
        className={`flex items-center justify-center w-full gap-[16px] h-full transition-opacity duration-300 ${
          voted ? 'opacity-0 hidden' : 'opacity-100 visible'
        }`}
      >
        <button onClick={() => setVoted('happy')}>
          <Image src={'/etc/smile.svg'} alt={'happy'} width={64} height={64} />
        </button>
        <button onClick={() => setVoted('sad')}>
          <Image src={'/etc/sad.svg'} alt={'sad'} width={64} height={64} />
        </button>
      </div>

      <div
        className={`gap-[16px] flex-col p-[16px] justify-center items-center h-full w-full transition-all duration-300 ${
          voted ? 'flex ' : 'hidden'
        }`}
      >
        <div className="gap-[8px] flex items-center w-full ">
          <Image src={'/etc/smile.svg'} alt={'happy'} width={32} height={32} />
          <div className="rounded-[4px] bg-[#D9D9D9] w-[120px] bg-opacity-30 relative flex-1 flex items-center justify-start h-full">
            <div
              className={`${
                voted ? `${upVote} delay-300` : `w-[30%]`
              } h-full rounded-[4px] bg-white bg-opacity-30 transition-all duration-500`}
            ></div>
            {voted === 'happy' && (
              <FaCheck className="absolute self-center w-full" />
            )}
          </div>
        </div>
        <div className="gap-[8px] flex items-center w-full ">
          <Image src={'/etc/sad.svg'} alt={'sad'} width={32} height={32} />
          <div className="rounded-[4px] bg-[#D9D9D9] w-[120px] bg-opacity-30 relative flex-1 flex items-center justify-start h-full">
            <div
              className={`${
                voted ? `${downVote} delay-300` : `w-[30%]`
              } h-full rounded-[4px] bg-white bg-opacity-30 transition-all duration-500`}
            ></div>
            {voted === 'sad' && (
              <FaCheck className="absolute self-center w-full" />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Vote;
