-- DropForeignKey
ALTER TABLE "FrontProject" DROP CONSTRAINT "FrontProject_multimediaId_fkey";

-- DropForeignKey
ALTER TABLE "FrontProject" DROP CONSTRAINT "FrontProject_workId_fkey";

-- AlterTable
ALTER TABLE "FrontProject" ALTER COLUMN "multimediaId" DROP NOT NULL,
ALTER COLUMN "workId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FrontProject" ADD CONSTRAINT "FrontProject_multimediaId_fkey" FOREIGN KEY ("multimediaId") REFERENCES "Multimedia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrontProject" ADD CONSTRAINT "FrontProject_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE SET NULL ON UPDATE CASCADE;
