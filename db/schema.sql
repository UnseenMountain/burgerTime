### Schema

CREATE DATABASE foodDB;

USE foodDB;

CREATE TABLE foods{

     id INT NOT NULL AUTO_INCREMENT,
    food_name VARCHAR (100) NULL,
    devoured BOOLEAN(1) NULL,
     PRIMARY key (id)
}