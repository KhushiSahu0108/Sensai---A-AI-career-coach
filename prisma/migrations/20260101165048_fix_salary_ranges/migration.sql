/*
  Warnings:

  - The `salaryRanges` column on the `IndustryInsight` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "salaryRanges",
ADD COLUMN     "salaryRanges" JSONB[];
