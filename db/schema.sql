CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers
(
    id INTEGER auto_increment,
    burger_name varchar(100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);