-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 14 2021 г., 20:28
-- Версия сервера: 5.7.29
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `foton`
--

-- --------------------------------------------------------

--
-- Структура таблицы `catalog`
--

CREATE TABLE `catalog` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `desc` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog`
--

INSERT INTO `catalog` (`id`, `title`, `desc`) VALUES
(1, 'Пример товара', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus hendrerit dui, at porta justo cursus vitae. Vivamus vel nibh congue orci ornare semper. Sed bibendum placerat accumsan. Vestibulum feugiat, nisl faucibus eleifend tincidunt, odio mi eleifend est, vel tempor elit neque sit amet arcu. Duis lorem nisi, vestibulum sed tincidunt ut, molestie nec sapien. In ullamcorper volutpat tempor. Vestibulum eu erat quis purus posuere sodales. Suspendisse feugiat sollicitudin condimentum. Donec mi orci, tempor non porttitor eget, placerat nec quam. Maecenas sit amet ante sed tortor interdum facilisis quis at nibh. Praesent tempor mauris odio, a tincidunt est hendrerit nec. Mauris luctus nisl nulla, eu accumsan felis varius vel.'),
(2, 'Пример товара 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus hendrerit dui, at porta justo cursus vitae. Vivamus vel nibh congue orci ornare semper. Sed bibendum placerat accumsan. Vestibulum feugiat, nisl faucibus eleifend tincidunt, odio mi eleifend est, vel tempor elit neque sit amet arcu. Duis lorem nisi, vestibulum sed tincidunt ut, molestie nec sapien. In ullamcorper volutpat tempor. Vestibulum eu erat quis purus posuere sodales. Suspendisse feugiat sollicitudin condimentum. Donec mi orci, tempor non porttitor eget, placerat nec quam. Maecenas sit amet ante sed tortor interdum facilisis quis at nibh. Praesent tempor mauris odio, a tincidunt est hendrerit nec. Mauris luctus nisl nulla, eu accumsan felis varius vel.'),
(3, 'Пример товара 6/2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus hendrerit dui, at porta justo cursus vitae. Vivamus vel nibh congue orci ornare semper. Sed bibendum placerat accumsan. Vestibulum feugiat, nisl faucibus eleifend tincidunt, odio mi eleifend est, vel tempor elit neque sit amet arcu. Duis lorem nisi, vestibulum sed tincidunt ut, molestie nec sapien. In ullamcorper volutpat tempor. Vestibulum eu erat quis purus posuere sodales. Suspendisse feugiat sollicitudin condimentum. Donec mi orci, tempor non porttitor eget, placerat nec quam. Maecenas sit amet ante sed tortor interdum facilisis quis at nibh. Praesent tempor mauris odio, a tincidunt est hendrerit nec. Mauris luctus nisl nulla, eu accumsan felis varius vel.');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
