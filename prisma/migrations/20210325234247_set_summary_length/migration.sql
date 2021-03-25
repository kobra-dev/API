/*
  Warnings:

  - You are about to alter the column `summary` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(250)`.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "summary" SET DATA TYPE VARCHAR(250);
