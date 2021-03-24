-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "parentId" TEXT;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("parentId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
