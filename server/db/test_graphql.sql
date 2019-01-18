DROP DATABASE IF EXISTS test_graphql;
CREATE DATABASE test_graphql;

\c test_graphql

CREATE TABLE schools (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    location TEXT NOT NULL
);

CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    school_id INTEGER REFERENCES schools (id),
    school_name TEXT REFERENCES schools (name),
    subject TEXT
);

INSERT INTO schools (name, location)
VALUES ('Pokey Oats', 'Bronx'), ('Hogwarts', 'England'), ('Hard Knocks', 'Hell');

INSERT INTO teachers (name, school_id, school_name, subject)
VALUES ('Water Doctor', 1, 'Pokey Oats', 'Art'),
('Snape', 2, 'Hogwarts', 'Alchemy'), ('Potter Clone', 2, 'Hogwarts', 'Dark Magicka'),
('Rocky', 3, 'Hard Knocks', 'Fighting');