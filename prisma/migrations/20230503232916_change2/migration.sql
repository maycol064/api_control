/*
  Warnings:

  - You are about to drop the `UserWork` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserWork" DROP CONSTRAINT "UserWork_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserWork" DROP CONSTRAINT "UserWork_workId_fkey";

-- DropTable
DROP TABLE "UserWork";

-- CreateTable
CREATE TABLE "_UserToWork" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWork_AB_unique" ON "_UserToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWork_B_index" ON "_UserToWork"("B");

-- AddForeignKey
ALTER TABLE "_UserToWork" ADD CONSTRAINT "_UserToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWork" ADD CONSTRAINT "_UserToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
