CREATE DATABASE IF NOT EXISTS db_site_frutas_test3;
USE db_site_frutas_test3;

CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products VALUES (0, 'Banana', 1);
INSERT INTO products VALUES (0, 'Pera', 2);

