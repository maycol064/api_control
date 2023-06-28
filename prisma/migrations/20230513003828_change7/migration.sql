-- DropForeignKey
ALTER TABLE "FrontProject" DROP CONSTRAINT "FrontProject_reportId_fkey";

-- AlterTable
ALTER TABLE "FrontProject" ALTER COLUMN "reportId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FrontProject" ADD CONSTRAINT "FrontProject_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;
