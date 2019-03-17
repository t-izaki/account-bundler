-- MySQL dump 10.13  Distrib 5.7.24, for osx10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: account-bundler_development
-- ------------------------------------------------------
-- Server version	5.6.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP DATABASE IF EXISTS `account-bundler_development`;
CREATE DATABASE `account-bundler_development`;
USE `account-bundler_development`;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `system_id` bigint(20) DEFAULT NULL,
  `system_user_id` bigint(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_accounts_on_system_id` (`system_id`),
  KEY `index_accounts_on_system_user_id` (`system_user_id`),
  CONSTRAINT `fk_rails_19762fbfc6` FOREIGN KEY (`system_id`) REFERENCES `systems` (`id`),
  CONSTRAINT `fk_rails_30ccf2494a` FOREIGN KEY (`system_user_id`) REFERENCES `system_users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (2,1,1,'2019-03-10 07:58:13','2019-03-10 07:58:13'),(3,2,1,'2019-03-10 07:58:22','2019-03-10 07:58:22'),(4,4,1,'2019-03-10 08:01:10','2019-03-10 08:01:10'),(5,2,2,'2019-03-10 08:27:22','2019-03-10 08:27:22'),(6,1,2,'2019-03-10 08:27:25','2019-03-10 08:27:25'),(7,2,4,'2019-03-10 08:28:03','2019-03-10 08:28:03'),(8,4,2,'2019-03-10 08:28:14','2019-03-10 08:28:14'),(9,4,4,'2019-03-10 08:28:16','2019-03-10 08:28:16'),(10,4,5,'2019-03-10 08:28:19','2019-03-10 08:28:19'),(11,1,3,'2019-03-10 08:45:16','2019-03-10 08:45:16');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `encrypted_password` varchar(255) NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `provider` varchar(255) NOT NULL DEFAULT 'email',
  `uid` varchar(255) NOT NULL DEFAULT '',
  `tokens` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_admins_on_email` (`email`),
  UNIQUE KEY `index_admins_on_uid_and_provider` (`uid`,`provider`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'admin1@admin.example','$2a$11$r9PZc77mIbyZauLvLgloWONe/pnY/SQEiuL9ONHd9AM0qhEsr52C2','2019-03-01 06:00:00','2019-03-10 08:57:27','管理者 太郎','email','admin1@admin.example','{\"pLOXyFKzs3k67vKtLbHeFQ\":{\"token\":\"$2a$10$XDpEZMVPmUlVy1F5ISNX0e0w4jV.dmV7SiWJBc/SSSUT794a3zL62\",\"expiry\":1553417847,\"last_token\":\"$2a$10$3.aX3mlfQiDNSqV8orh.OOlcgIfW3U8kTVWUBNh3F/WINnQ0NVgpi\",\"updated_at\":\"2019-03-10T17:57:27.131+09:00\"}}'),(2,'admin2@admin.example','$2a$11$X97k9de.gMVHbEG2xhL6pOTDtYl6PguPUC5AjtD7ovL2ieJX7DI4e','2019-03-10 07:09:01','2019-03-10 08:51:40','管理者 花子','email','admin2@admin.example','{\"uxEVYOyA4ATGwJtZjzbOFg\":{\"token\":\"$2a$10$6CytOK.TGv3n3qfIdWj2IOMHzc89wo0inN7tvGOoS2DOgDuLi0Y3q\",\"expiry\":1553417500,\"last_token\":\"$2a$10$iOsEVfzOq6vYlKXJJJ8/SOhDz3WNY5WZEOJmgWf6rRfm6QsaCskYC\",\"updated_at\":\"2019-03-10T17:51:40.630+09:00\"}}');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ar_internal_metadata`
--

DROP TABLE IF EXISTS `ar_internal_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ar_internal_metadata` (
  `key` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ar_internal_metadata`
--

LOCK TABLES `ar_internal_metadata` WRITE;
/*!40000 ALTER TABLE `ar_internal_metadata` DISABLE KEYS */;
INSERT INTO `ar_internal_metadata` VALUES ('environment','development','2019-03-10 06:56:15','2019-03-10 06:56:15');
/*!40000 ALTER TABLE `ar_internal_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20190205061000'),('20190205100948'),('20190214063849'),('20190218025425'),('20190219103708'),('20190220044347'),('20190220081314'),('20190220081558'),('20190220082630'),('20190220082643'),('20190220082905'),('20190224082436'),('20190227021939'),('20190227155145'),('20190227164804'),('20190227170914');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_categories`
--

DROP TABLE IF EXISTS `system_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_categories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_categories`
--

LOCK TABLES `system_categories` WRITE;
/*!40000 ALTER TABLE `system_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user_categories`
--

DROP TABLE IF EXISTS `system_user_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_user_categories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user_categories`
--

LOCK TABLES `system_user_categories` WRITE;
/*!40000 ALTER TABLE `system_user_categories` DISABLE KEYS */;
INSERT INTO `system_user_categories` VALUES (1,'役員','2018-01-01 06:00:00','2018-01-01 06:00:00'),(2,'社員','2018-01-01 06:00:00','2018-01-01 06:00:00'),(3,'委託先','2018-01-01 06:00:00','2018-01-01 06:00:00');
/*!40000 ALTER TABLE `system_user_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_users`
--

DROP TABLE IF EXISTS `system_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `joined_at` date DEFAULT NULL,
  `retired_at` date DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `archived_at` datetime DEFAULT NULL,
  `system_user_category_id` bigint(20) DEFAULT NULL,
  `email` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_system_users_on_system_user_category_id` (`system_user_category_id`),
  CONSTRAINT `fk_rails_48caee7bbc` FOREIGN KEY (`system_user_category_id`) REFERENCES `system_user_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_users`
--

LOCK TABLES `system_users` WRITE;
/*!40000 ALTER TABLE `system_users` DISABLE KEYS */;
INSERT INTO `system_users` VALUES (1,'橋本直樹','2018-01-01',NULL,'2018-01-01 06:00:00','2018-01-01 06:00:00',NULL,1,'hashimoto@user.example'),(2,'田中悠','2018-01-01',NULL,'2018-01-01 06:00:00','2018-01-01 06:00:00',NULL,2,'tanaka@user.example'),(3,'遠藤拓也','2018-01-01','2018-05-01','2018-01-01 06:00:00','2018-01-01 06:00:00','2018-05-02 10:00:00',2,'endo@user.example'),(4,'佐々木亮太','2018-01-01',NULL,'2018-01-01 06:00:00','2018-01-01 06:00:00',NULL,2,'sasaki@user.example'),(5,'青木和也','2018-01-01',NULL,'2018-03-01 06:00:00','2018-03-01 06:00:00',NULL,2,'aoki@user.example'),(6,'XXYY株式会社 杉本様','2018-01-01',NULL,'2018-05-15 06:00:00','2018-05-15 06:00:00',NULL,3,'sugimoto@company.example');
/*!40000 ALTER TABLE `system_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `systems`
--

DROP TABLE IF EXISTS `systems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `systems` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `use_start_at` date DEFAULT NULL,
  `remark` text,
  `admin_id` bigint(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `archived_at` datetime DEFAULT NULL,
  `system_category_id` bigint(20) DEFAULT NULL,
  `use_end_at` date DEFAULT NULL,
  `url` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_systems_on_name` (`name`),
  KEY `index_systems_on_admin_id` (`admin_id`),
  KEY `index_systems_on_system_category_id` (`system_category_id`),
  CONSTRAINT `fk_rails_53a3b41e8b` FOREIGN KEY (`system_category_id`) REFERENCES `system_categories` (`id`),
  CONSTRAINT `fk_rails_e81dc19a3c` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `systems`
--

LOCK TABLES `systems` WRITE;
/*!40000 ALTER TABLE `systems` DISABLE KEYS */;
INSERT INTO `systems` VALUES (1,'Slack','2018-01-01',NULL,1,'2018-01-01 06:00:00','2018-01-01 06:00:00',NULL,NULL,NULL,'https://slack.com/intl/ja-jp/'),(2,'Chatwork','2018-02-01',NULL,1,'2018-02-01 06:00:00','2018-02-02 06:00:00',NULL,NULL,NULL,'https://go.chatwork.com/ja/'),(3,'Dropbox','2018-02-15',NULL,2,'2018-02-15 06:00:00','2018-02-15 06:00:00','2018-06-05 08:00:00',NULL,'2018-06-03','https://www.dropbox.com/ja/'),(4,'Box','2018-06-16',NULL,2,'2018-06-16 06:00:00','2018-06-16 06:00:00',NULL,NULL,NULL,'https://www.box.com/ja-jp/home');
/*!40000 ALTER TABLE `systems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `action` int(11) NOT NULL,
  `target_system_user_id` bigint(20) DEFAULT NULL,
  `target_system_id` bigint(20) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `closed_at` datetime DEFAULT NULL,
  `author_id` bigint(20) DEFAULT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `reject_reason` text,
  PRIMARY KEY (`id`),
  KEY `index_tasks_on_target_system_user_id` (`target_system_user_id`),
  KEY `index_tasks_on_target_system_id` (`target_system_id`),
  KEY `index_tasks_on_author_id` (`author_id`),
  KEY `index_tasks_on_assignee_id` (`assignee_id`),
  CONSTRAINT `fk_rails_0016c50613` FOREIGN KEY (`assignee_id`) REFERENCES `admins` (`id`),
  CONSTRAINT `fk_rails_0fefb935f8` FOREIGN KEY (`target_system_user_id`) REFERENCES `system_users` (`id`),
  CONSTRAINT `fk_rails_799f6287fc` FOREIGN KEY (`author_id`) REFERENCES `admins` (`id`),
  CONSTRAINT `fk_rails_94f3ef6112` FOREIGN KEY (`target_system_id`) REFERENCES `systems` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,0,1,1,1,'2018-01-03 15:00:08',1,1,'2018-01-01 15:50:08','2018-01-03 15:00:08',NULL),(2,0,1,2,1,'2018-01-03 15:01:08',1,1,'2018-01-02 15:50:08','2018-01-03 15:01:08',NULL),(3,0,1,4,1,'2018-01-10 08:01:10',1,2,'2018-01-10 07:50:08','2018-01-10 08:01:10',NULL),(4,0,2,1,1,'2019-03-10 08:27:25',1,1,'2018-10-10 08:26:07','2019-03-10 08:27:25',NULL),(5,0,2,2,1,'2019-03-10 08:27:22',1,1,'2018-10-10 08:26:07','2019-03-10 08:27:22',NULL),(6,0,2,4,1,'2019-03-10 08:28:14',1,2,'2018-11-10 08:26:07','2019-03-10 08:28:14',NULL),(7,0,4,1,2,'2019-03-10 08:27:51',2,1,'2018-12-10 08:26:29','2019-03-10 08:27:51','一旦はchatworkで運用してください。'),(8,0,4,2,1,'2019-03-10 08:28:03',2,1,'2018-12-10 08:26:29','2019-03-10 08:28:03',NULL),(9,0,4,4,1,'2019-03-10 08:28:16',2,2,'2019-01-10 08:26:29','2019-03-10 08:28:16',NULL),(10,0,5,2,0,NULL,1,1,'2019-01-10 08:26:39','2019-03-10 08:26:39',NULL),(11,0,5,4,1,'2019-03-10 08:28:19',1,2,'2019-01-10 08:26:39','2019-03-10 08:28:19',NULL),(12,0,6,2,0,NULL,1,1,'2019-02-10 08:26:47','2019-03-10 08:26:47',NULL),(13,0,3,1,1,'2018-11-10 08:45:16',1,1,'2018-11-10 08:45:09','2018-11-10 08:45:16',NULL),(14,1,3,1,0,NULL,1,1,'2019-03-10 08:45:25','2019-03-10 08:45:25',NULL);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-10 17:59:33
