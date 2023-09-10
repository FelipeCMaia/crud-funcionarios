-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(200) NOT NULL,
    `descricao` TEXT NOT NULL,
    `codigo` VARCHAR(25) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `avaliacao` VARCHAR(5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
