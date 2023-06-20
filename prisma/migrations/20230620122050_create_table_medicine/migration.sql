-- CreateTable
CREATE TABLE `Medicine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `satuan` VARCHAR(255) NULL,
    `price` DECIMAL(65, 30) NULL,
    `amount` INTEGER NULL,
    `expired` INTEGER NULL,
    `packaging` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;