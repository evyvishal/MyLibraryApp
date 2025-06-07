/*
  Warnings:

  - You are about to drop the `acitivity_photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `acitivity_photos` DROP FOREIGN KEY `acitivity_photos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `book_category_links` DROP FOREIGN KEY `book_category_links_ibfk_1`;

-- DropForeignKey
ALTER TABLE `book_category_links` DROP FOREIGN KEY `book_category_links_ibfk_2`;

-- DropTable
DROP TABLE `acitivity_photos`;

-- CreateTable
CREATE TABLE `activity_photos` (
    `photo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `activity_id` INTEGER NOT NULL,
    `url` VARCHAR(1024) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `activity_id`(`activity_id`),
    PRIMARY KEY (`photo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `book_category_links` ADD CONSTRAINT `book_category_links_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books`(`book_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `book_category_links` ADD CONSTRAINT `book_category_links_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `book_categories`(`category_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `activity_photos` ADD CONSTRAINT `activity_photos_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activities`(`activity_id`) ON DELETE CASCADE ON UPDATE NO ACTION;
