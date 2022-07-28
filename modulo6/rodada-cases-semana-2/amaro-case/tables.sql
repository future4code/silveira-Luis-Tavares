CREATE TABLE IF NOT EXISTS amaro_products (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS amaro_tags (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS amaro_products_tags (
    product_id INT,
    tag_id INT,
    FOREIGN KEY (product_id) REFERENCES amaro_products(id),
    FOREIGN KEY (tag_id) REFERENCES amaro_tags(id)
);

ALTER TABLE amaro_products AUTO_INCREMENT = 8000;
ALTER TABLE amaro_tags AUTO_INCREMENT = 200;

SELECT * FROM amaro_products;
SELECT * FROM amaro_tags;
SELECT * FROM amaro_products_tags;

DROP TABLE amaro_products_tags;
DROP TABLE amaro_products;
DROP TABLE amaro_tags;