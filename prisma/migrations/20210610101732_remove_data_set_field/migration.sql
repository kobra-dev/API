/*
  Warnings:

  - You are about to drop the `DataSet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DataSet" DROP CONSTRAINT "DataSet_userId_fkey";

-- DropTable
DROP TABLE "DataSet";
