/*
  Warnings:

  - A unique constraint covering the columns `[company]` on the table `Contratist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contratist_company_key" ON "Contratist"("company");
