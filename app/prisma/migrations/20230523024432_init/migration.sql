-- AlterTable
ALTER TABLE `permissions` ADD COLUMN `component` VARCHAR(191) NULL,
    ADD COLUMN `icon` VARCHAR(191) NULL,
    ADD COLUMN `menu_type` VARCHAR(191) NULL,
    ADD COLUMN `path` VARCHAR(191) NULL,
    ADD COLUMN `url` VARCHAR(191) NULL;