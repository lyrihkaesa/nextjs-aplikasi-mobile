-- CreateTable
CREATE TABLE `Matkul` (
    `code` VARCHAR(255) NOT NULL,
    `firebase_key` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `sks` INTEGER NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
