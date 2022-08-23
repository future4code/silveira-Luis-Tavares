CREATE TABLE IF NOT EXISTS cubo_graph_data (
    id VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    participation FLOAT NOT NULL
);

SELECT * FROM cubo_graph_data;