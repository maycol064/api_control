/*
  Warnings:

  - You are about to drop the column `belongsToId` on the `Contratist` table. All the data in the column will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkProject` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `frontProjectId` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contratist" DROP CONSTRAINT "Contratist_belongsToId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_frontProjectId_fkey";

-- DropForeignKey
ALTER TABLE "WorkProject" DROP CONSTRAINT "WorkProject_projectId_fkey";

-- DropForeignKey
ALTER TABLE "WorkProject" DROP CONSTRAINT "WorkProject_workId_fkey";

-- AlterTable
ALTER TABLE "Contratist" DROP COLUMN "belongsToId";

-- AlterTable
ALTER TABLE "Work" ADD COLUMN     "frontProjectId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "WorkProject";

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_frontProjectId_fkey" FOREIGN KEY ("frontProjectId") REFERENCES "FrontProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
