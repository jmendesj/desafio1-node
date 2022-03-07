USE db_app;
CREATE TABLE IF NOT EXISTS people (
    id SMALLINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(70) NOT NULL
);

INSERT INTO people(name) values('Mendes');