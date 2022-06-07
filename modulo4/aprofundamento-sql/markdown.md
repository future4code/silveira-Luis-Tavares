-- EXERCÍCIO 1 --
-- 1 - A) DROP COLUMN salary removerá a coluna de salário;
-- 1 - B) CHANGE gender sex irá trocar o nome da coluna "gender" para "sex";
-- 1 - C) CHANGE gender gender irá manter o mesmo nome da coluna porém trocar o seu tipo para VARCHAR(255);
-- 1 - D --
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- EXERCÍCIO 2 --
-- 2 - A --
UPDATE Actor SET name = "Arlette Pinheiro", birth_date = "1928-10-16" WHERE id = "003";
-- 2 - B --
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
-- 2 - C --
UPDATE
	Actor
SET
	name = "Leonardo DiCaprio",
    salary = 1500000,
    birth_date = "1974-11-11",
    gender = "male"
WHERE
	id = "005";
-- 2 - D --
UPDATE Actor SET name = "Teste errado" WHERE id = "010";
SELECT * FROM Actor;
-- RESPOSTA: o update não recebe erro, porém nenhum dado é atualizado já que não existe --

-- EXERCÍCIO 3 --
-- 3 - A --
DELETE FROM Actor WHERE name = "Arlette Pinheiro";
-- 3 - B --
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- EXERCÍCIO 4 --
-- 3 - A --
SELECT MAX(salary) FROM Actor;
-- 3 - B --
SELECT MIN(salary) FROM Actor;
-- 3 - C --
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- 3 - D --
SELECT SUM(salary) FROM Actor;

-- EXERCÍCIO 5 --
-- 5 - A --
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
-- RESPOSTA: retorna a quantidade de atores masculinos e quantidade de atores femininos na tabela --
-- 5 - B --
SELECT id, name FROM Actor ORDER BY name DESC;
-- 5 - C --
SELECT * FROM Actor ORDER BY salary ASC;
-- 5 - D --
SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;
-- 5 - E --
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

-- EXERCÍCIO 6 --
-- 6 - A --
ALTER TABLE Movie ADD playing_limit_date DATE;
-- 6 - B --
ALTER TABLE Movie CHANGE rating rating FLOAT;
-- 6 - C --
SELECT * FROM Movie;
UPDATE Movie SET playing_limit_date = "2022-08-10" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2002-10-01" WHERE id = "004";
-- 6 - D --
DELETE FROM Movie WHERE id = "001";
UPDATE Movie SET synopsis = "Teste de nova sinópse" WHERE id = "001";
-- RESPOSTA: não retorna erro nenhum, porém recebemos uma mensagem que nenhuma linha foi modificada (pois o filme já não existe mais na tabela) --