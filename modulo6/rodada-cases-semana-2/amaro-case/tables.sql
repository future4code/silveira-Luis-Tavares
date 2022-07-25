CREATE TABLE IF NOT EXISTS amaro_products (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS amaro_tags (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS amaro_products_tags (
    product_id VARCHAR(255),
    tag_id INT,
    FOREIGN KEY (product_id) REFERENCES amaro_products(id),
    FOREIGN KEY (tag_id) REFERENCES amaro_tags(id)
);