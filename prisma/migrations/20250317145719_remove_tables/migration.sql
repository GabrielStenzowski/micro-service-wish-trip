/*
  Warnings:

  - You are about to drop the `PlaceCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `PlaceCategory` DROP FOREIGN KEY `PlaceCategory_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `PlaceCategory` DROP FOREIGN KEY `PlaceCategory_placeId_fkey`;

-- AlterTable
ALTER TABLE `Place` ADD COLUMN `categoryId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `PlaceCategory`;

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
