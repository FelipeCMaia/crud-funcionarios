-- CreateTable
CREATE TABLE `ProdutoAnexo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caminho` VARCHAR(500) NOT NULL,
    `principal` BOOLEAN NOT NULL,
    `produto_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProdutoAnexo` ADD CONSTRAINT `produto_produto_anexo_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
