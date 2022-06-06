USE `silveira-21814429-luis-tavares`;

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- EXERCÍCIO 1 ---
-- 1- A) varchar seria um valor como se fosse string e os parênteses possuem o número máximo de caractéres; DATE é um valor em formato de data; NOT NULL significa que os valores não podem ser nulos --

SHOW DATABASES;
SHOW TABLES;

-- 1- B) acredito que o cmd "SHOW DATABASES" mostra os bancos de daos que possuímos e "SHOW TABLES" todas tabelas criadas. --

DESCRIBE Actor;

-- 1 - C) mostra as propriedades da tabela específica e quais valores ela espera receber, assim como também quais são obrigatórios e se possuem um valor default;

-- EXERCÍCIO 2 - A, B, C, D, E, F --
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
	"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18",
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Brad Pitt",
  50000000,
  "1963-12-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Angelina Jolie",
  40000000,
  "1975-06-04", 
  "female"
);

-- EXERCÍCIO 3 A, B, C, D, E --
SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "invalid";
-- 3- C) a resposta foi nula pois todos atores possuem gênero especificado --
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
SELECT id, name FROM Actor WHERE id = "002";
-- 3- E) a coluna "name" estava descrita como "nome" --

-- EXERCÍCIO 4 A, B, C, D --
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- primeiro o algoritmo irá separar os nomes que começam com A e J por conta dos parênteses, após isso irá verificar quais dos resultados terá salário maior que 300k --
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
SELECT * FROM Actor WHERE name LIKE "%G%";
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

-- EXERCÍCIO 5 A, B, C, D, E --
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
	synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    evaluation VARCHAR(10) NOT NULL
);

INSERT INTO Movies (id, name, synopsis, release_date, evaluation)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    "7"
);

INSERT INTO Movies (id, name, synopsis, release_date, evaluation)
VALUES (
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    "10"
);

INSERT INTO Movies (id, name, synopsis, release_date, evaluation)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    "8"
);

INSERT INTO Movies (id, name, synopsis, release_date, evaluation)
VALUES (
	"004",
    "Cidade de Deus",
    "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
    "2002-08-30",
    "10"
);

-- EXERCÍCIO 6 A, B, C --
SELECT id, name, evaluation FROM Movies WHERE id = "004";
SELECT * FROM Movies WHERE name = "cidade de deus";
SELECT id, name, synopsis FROM Movies WHERE evalution >= "7";

-- EXERCÍCIO 7 --
SELECT * FROM Movies WHERE name LIKE "%vida%";
SELECT * FROM Movies WHERE name LIKE "%cidade%" OR synopsis LIKE "%violência%";
SELECT * FROM Movies WHERE release_date < "2022-06-06";
SELECT * FROM Movies WHERE release_date < "2022-06-06" AND (name LIKE "%flor%" OR synopsis LIKE "%farra%") AND evaluation > "7";