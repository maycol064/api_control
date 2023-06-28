/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Worker` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Worker_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Worker_username_key" ON "Worker"("username");
