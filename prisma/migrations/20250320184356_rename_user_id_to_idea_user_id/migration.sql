/*
  Warnings:

  - You are about to drop the column `userId` on the `Place` table. All the data in the column will be lost.
  - Added the required column `idea_userId` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Place` DROP FOREIGN KEY `Place_userId_fkey`;

-- DropIndex
DROP INDEX `Place_userId_fkey` ON `Place`;

-- AlterTable
ALTER TABLE `Place` DROP COLUMN `userId`,
    ADD COLUMN `idea_userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_idea_userId_fkey` FOREIGN KEY (`idea_userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
