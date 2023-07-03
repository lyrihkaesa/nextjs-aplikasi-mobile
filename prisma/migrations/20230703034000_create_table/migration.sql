-- CreateTable
CREATE TABLE `Medicine` (
    `code` VARCHAR(255) NOT NULL,
    `firebase_key` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `price` DECIMAL(65, 30) NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `employee_code` VARCHAR(255) NOT NULL,
    `firebase_key` VARCHAR(255) NULL,
    `employee_name` VARCHAR(255) NULL,
    `position` VARCHAR(255) NULL,

    PRIMARY KEY (`employee_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
