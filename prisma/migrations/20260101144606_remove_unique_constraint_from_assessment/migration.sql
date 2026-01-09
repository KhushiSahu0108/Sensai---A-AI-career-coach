/*
  Warnings:

  - You are about to drop the column `imorovementTip` on the `Assessment` table. All the data in the column will be lost.
  - Changed the type of `salaryRanges` on the `IndustryInsight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Assessment_userId_key";

-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "imorovementTip",
ADD COLUMN     "improvementTip" TEXT;

-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "salaryRanges",
ADD COLUMN     "salaryRanges" JSONB NOT NULL;
