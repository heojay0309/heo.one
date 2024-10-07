'use server';

import { prisma } from '@/utils/prisma';

export const voteAction = async (votedType: string) => {
  const voteType = votedType;
  const voteId = '1';
  const results = await prisma.vote.upsert({
    where: { id: voteId as string },
    update: {
      up: voteType === 'happy' ? { increment: 1 } : undefined, // Increment up if voteType is 'up'
      down: voteType === 'sad' ? { increment: 1 } : undefined, // Increment down if voteType is 'down'
    },
    create: {
      id: voteId as string, // Assuming voteId comes from the form and is used as the identifier
      up: voteType === 'happy' ? 1 : 0, // Initialize up to 1 if it's an upvote
      down: voteType === 'sad' ? 1 : 0, // Initialize down to 1 if it's a downvote
    },
    select: {
      up: true,
      down: true,
    },
  });

  return {
    ...results,
    total: results.down + results.up,
  };
};
