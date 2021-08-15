/*
  Warnings:

  - You are about to drop the column `modelsDb` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "modelsDb";

-- CreateTable
CREATE TABLE "MLModel" (
    "id" TEXT NOT NULL,
    "modelJSON" TEXT NOT NULL,
    "modelParams" TEXT,
    "projectID" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MLModel" ADD FOREIGN KEY ("projectID") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
