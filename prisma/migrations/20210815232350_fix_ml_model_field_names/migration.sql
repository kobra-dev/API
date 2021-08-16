/*
  Warnings:

  - You are about to drop the column `modelJSON` on the `MLModel` table. All the data in the column will be lost.
  - You are about to drop the column `projectID` on the `MLModel` table. All the data in the column will be lost.
  - Added the required column `modelJson` to the `MLModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `MLModel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MLModel" DROP CONSTRAINT "MLModel_projectID_fkey";

-- AlterTable
ALTER TABLE "MLModel" DROP COLUMN "modelJSON",
DROP COLUMN "projectID",
ADD COLUMN     "modelJson" TEXT NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MLModel" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
