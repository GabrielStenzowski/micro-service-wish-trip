/*
  Warnings:

  - You are about to drop the column `opinion` on the `Place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Place` DROP COLUMN `opinion`;

-- AlterTable
ALTER TABLE `UserPlace` ADD COLUMN `opinion` VARCHAR(191) NULL;
