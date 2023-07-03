-- AlterTable
ALTER TABLE `medicine` ADD COLUMN `firebase_key` VARCHAR(255) NULL,
    MODIFY `name` VARCHAR(255) NULL;
