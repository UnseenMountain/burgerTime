### Schema

CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE burgers(

     id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NULL,
    devoured BOOLEAN DEFAULT false,
     PRIMARY key (id)
)