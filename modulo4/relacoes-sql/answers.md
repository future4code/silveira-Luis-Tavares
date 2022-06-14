CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

SELECT * FROM Movie;
SELECT name, id FROM Actor;
SELECT * FROM Rating;

-- EXERCÍCIO 1 - A, B, C, D, E --
-- 1- A) é um campo que referência a chave primária de outra tabela;

-- 1- B)
INSERT INTO Rating VALUES ("001", "Clássico de qualidade", 10, "001");
INSERT INTO Rating VALUES ("002", "Filme de qualidade", 8, "002");
INSERT INTO Rating VALUES ("003", "Filme muito bom", 8, "003");
INSERT INTO Rating VALUES ("004", "Melhor filme brasileiro", 8, "004");

-- 1- C) --
INSERT INTO Rating VALUES ("005", "Melhor filme brasileiro", 8, "008");
-- RESPOSTA: o erro diz que o ID não existe na tabela de filmes, ou seja, sempre terá que ser um ID de um filme válido;

-- 1- D) --
ALTER TABLE Movie DROP COLUMN rating;

-- 1- E) --
DELETE FROM Movie WHERE id = "001";
-- RESPOSTA: não podemos remover um elemento de uma tabela que possui informações em outra tabela através da foreign key --


-- EXERCÍCIO 2 - A, B, C, D --
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- 2- A) a tabela acima irá receber o ID de um filme específico juntamente com o ID do ator que está presente no elenco --

-- 2- B) --
INSERT INTO MovieCast VALUES ("002", "003"), ("004", "005"), ("001", "007"), ("003", "002"), ("004", "004"), ("001", "002");

-- 2- C) --
INSERT INTO MovieCast VALUES ("001", "010");
-- RESPOSTA: assim como na resposta do exercício 1-C, utilizando a foreign key com os IDS de referência, só é possível utilizar IDS de filmes e atores válidos --

-- 2- D) --
DELETE FROM Actor WHERE id = "003";
-- RESPOSTA: não é possível remover por conta de outra tabela também possuir informações deste ator, assim como o exercício 1-E --


-- EXERCÍCIO 3 --
-- 3- A) o operador ON referência uma condição quando usamos o JOIN --

-- 3- B) --
SELECT name, Movie.id, rate from Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;