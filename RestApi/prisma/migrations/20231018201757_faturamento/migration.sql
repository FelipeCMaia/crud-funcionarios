/*
  Warnings:

  - Added the required column `faturamento` to the `ClienteEndereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ClienteEndereco` ADD COLUMN `faturamento` BOOLEAN NOT NULL;
