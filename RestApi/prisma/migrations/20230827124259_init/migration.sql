-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(12) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT false,
    `usuario_tipo_id` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    UNIQUE INDEX `Usuario_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioTipo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `usuario_usuariotipoid_fkey` FOREIGN KEY (`usuario_tipo_id`) REFERENCES `UsuarioTipo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
