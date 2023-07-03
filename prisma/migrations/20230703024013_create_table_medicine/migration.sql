/*
  Warnings:

  - The primary key for the `medicine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `amount` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the column `expired` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the column `packaging` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the column `satuan` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `medicine` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `medicine` DROP PRIMARY KEY,
    DROP COLUMN `amount`,
    DROP COLUMN `expired`,
    DROP COLUMN `id`,
    DROP COLUMN `packaging`,
    DROP COLUMN `satuan`,
    DROP COLUMN `type`,
    ADD PRIMARY KEY (`code`);
