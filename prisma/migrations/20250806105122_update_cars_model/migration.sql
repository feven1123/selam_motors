/*
  Warnings:

  - You are about to drop the column `location` on the `Cars` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Cars" DROP COLUMN "location",
ADD COLUMN     "brand" TEXT NOT NULL;
