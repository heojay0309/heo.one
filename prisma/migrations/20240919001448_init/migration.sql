-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "up" INTEGER NOT NULL,
    "down" INTEGER NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);
