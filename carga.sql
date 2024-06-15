-- carga.sql
CREATE TABLE IF NOT EXISTS professores(
    id INT AUTO_INCREMENT PRIMARY KEY,
    idade INT NOT NULL,
    name VARCHAR(55) NOT NULL
);

INSERT INTO professores (idade, name) VALUES (30, 'Renato'),
                                              (35, 'Maria'),
                                              (40, 'Carlos');

