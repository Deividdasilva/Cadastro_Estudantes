-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Nov-2020 às 21:25
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estudantes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--

DROP TABLE IF EXISTS `cadastro`;
CREATE TABLE IF NOT EXISTS `cadastro` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name_lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_birth` date NOT NULL,
  `series` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cep` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rua` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numero` int NOT NULL,
  `complemento` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bairro` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_mother` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpf_mother` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_payment` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`id`, `name_lastname`, `date_birth`, `series`, `cep`, `rua`, `numero`, `complemento`, `bairro`, `city`, `estado`, `name_mother`, `cpf_mother`, `date_payment`, `created_at`, `updated_at`) VALUES
(13, 'Jose carlos', '2001-09-05', '8', '95580-000', 'Centro', 31, 'Casa', 'Centro', 'São Paulo', 'SP', 'Marli Valim', '03760873073', '2020-11-12', NULL, NULL),
(12, 'Felipe da silva', '1999-03-02', '9', '95580-000', 'Centro', 21, 'Casa', 'Centro', 'Porto Alegre', 'Rs', 'Silvana Maria', '03760873073', '2020-11-20', NULL, NULL),
(11, 'João', '2000-06-01', '7', '95580-000', 'Centro', 11, 'Casa', 'Centro', 'Três Cachoeiras', 'Rs', 'Maria da Silva', '03760873073', '2020-11-10', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
