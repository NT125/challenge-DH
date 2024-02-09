CREATE DATABASE IF NOT EXISTS `recruitingRH`;
USE `recruitingRH`;

DROP TABLE IF EXISTS `professions`;
CREATE TABLE `professions` (
	`id`INT UNSIGNED AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(110) NOT NULL,
    `createdAt` DATE,
    `updatedAt` DATE,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `applicants`;
CREATE TABLE `applicants` (
	`id` INT UNSIGNED AUTO_INCREMENT NOT NULL,
	`DNI` VARCHAR(9) NOT NULL,
    `firstName` VARCHAR(30) NOT NULL,
    `lastName` VARCHAR(25) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `phone` VARCHAR(12),
    `linkedinURL` VARCHAR(99),
    `dateOfBirth` DATE NOT NULL,
    `genre` ENUM('Hombre', 'Mujer', 'Otro', 'Prefiero no decirlo') NOT NULL,
    `image` VARCHAR(25),
    `professionId` INT UNSIGNED NOT NULL,
    `experiencieLevel` VARCHAR(20),
    `createdAt` DATE,
    `updatedAt` DATE,
    `deletedAt` DATE,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`professionId`) REFERENCES `professions`(`id`)
);
