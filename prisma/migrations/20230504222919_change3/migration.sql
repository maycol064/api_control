/*
  Warnings:

  - You are about to drop the column `frontProjectId` on the `Work` table. All the data in the column will be lost.
  - Added the required column `workId` to the `FrontProject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_frontProjectId_fkey";

-- AlterTable
ALTER TABLE "FrontProject" ADD COLUMN     "workId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "frontProjectId";

-- AddForeignKey
ALTER TABLE "FrontProject" ADD CONSTRAINT "FrontProject_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
