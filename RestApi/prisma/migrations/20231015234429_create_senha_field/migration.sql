/*
  Warnings:

  - Added the required column `senha` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cliente` ADD COLUMN `senha` VARCHAR(100) NOT NULL;
