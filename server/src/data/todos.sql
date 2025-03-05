DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY, 
    task VARCHAR(255),
    isdone BOOLEAN,
	user_id INT REFERENCES users(id)
);


INSERT INTO todos (task, isdone, user_id) VALUES ('laundry', false, 1);
INSERT INTO todos (task, isdone, user_id)  VALUES ('laundry and cleaning', false, 2);
INSERT INTO todos (task, isdone, user_id) VALUES ('shopping', true, 3);
INSERT INTO todos (task, isdone, user_id)  VALUES ('coding practice', false, 1);
INSERT INTO todos (task, isdone, user_id)  VALUES ('sing happy birthday', false, 3);

