-- CreateTable
CREATE TABLE `Guru` (
    `nip` VARCHAR(255) NOT NULL,
    `nama` VARCHAR(255) NULL,
    `status` VARCHAR(255) NULL,
    `gaji` INTEGER NULL,

    PRIMARY KEY (`nip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
