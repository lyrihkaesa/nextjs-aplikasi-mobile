-- CreateTable
CREATE TABLE `Teacher` (
    `employee_code` VARCHAR(255) NOT NULL,
    `employee_name` VARCHAR(255) NULL,
    `position` VARCHAR(255) NULL,
    PRIMARY KEY (`employee_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;