/*
  Warnings:

  - You are about to drop the column `visited` on the `Place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Place` DROP COLUMN `visited`;

-- CreateTable
CREATE TABLE `UserPlace` (
    `userId` VARCHAR(191) NOT NULL,
    `placeId` VARCHAR(191) NOT NULL,
    `visited` BOOLEAN NOT NULL,
    `active` BOOLEAN NOT NULL,

    PRIMARY KEY (`userId`, `placeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserPlace` ADD CONSTRAINT `UserPlace_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPlace` ADD CONSTRAINT `UserPlace_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
