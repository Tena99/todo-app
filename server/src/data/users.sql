DROP TABLE IF EXISTS users CASCADE; 


CREATE TABLE users (
id SERIAL PRIMARY KEY, 
email VARCHAR(255)
); 


INSERT INTO users (email) VALUES ('ann@gmail.com');
INSERT INTO users (email) VALUES ('sam@gmail.com');
INSERT INTO users (email) VALUES ('mike@gmail.com');
INSERT INTO users (email) VALUES ('john@gmail.com');
