DROP DATABASE IF EXISTS workout_trackerDB;
CREATE DATABASE workout_trackerDB;
USE workout_trackerDB;

CREATE TABLE Users (
  name VARCHAR(300) NOT NULL PRIMARY KEY,
  email VARCHAR(300) NOT NULL,
  password VARCHAR(300) NOT NULL,
  
),
