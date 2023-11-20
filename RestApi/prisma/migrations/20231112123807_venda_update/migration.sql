/*
  Warnings:

  - Added the required column `forma_pagamento` to the `Venda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_frete` to the `Venda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_total` to the `Venda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Venda` ADD COLUMN `forma_pagamento` VARCHAR(15) NOT NULL,
    ADD COLUMN `valor_frete` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `valor_total` DECIMAL(10, 2) NOT NULL;
