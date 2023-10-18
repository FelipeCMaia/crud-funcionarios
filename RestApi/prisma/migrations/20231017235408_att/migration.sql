-- AlterTable
ALTER TABLE `ClienteEndereco` MODIFY `cep` VARCHAR(8) NULL,
    MODIFY `logradouro` VARCHAR(150) NULL,
    MODIFY `bairro` VARCHAR(8) NULL,
    MODIFY `cidade` VARCHAR(8) NULL,
    MODIFY `numero` VARCHAR(8) NULL,
    MODIFY `complemento` VARCHAR(8) NULL;
