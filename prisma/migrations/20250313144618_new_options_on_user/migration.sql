/*
  Warnings:

  - Added the required column `date_birth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `date_birth` DATETIME(3) NOT NULL,
    ADD COLUMN `password_hash` VARCHAR(191) NOT NULL;
