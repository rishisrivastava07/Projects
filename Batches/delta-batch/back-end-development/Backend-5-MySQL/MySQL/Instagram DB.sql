CREATE DATABASE instagram;
USE instagram;

CREATE TABLE user (
	id INT PRIMARY KEY,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    followings INT,
	CONSTRAINT age_check CHECK (age >= 13)
);

CREATE TABLE post(
	postID INT PRIMARY KEY,
    content VARCHAR(100) NOT NULL,
    userID INT,
    FOREIGN KEY (userID) REFERENCES user(id)
);

INSERT INTO user
(id, age, name, email, followers, followings) 
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306), 
(4, 17, "donald", "donald@gmail.com", 200, 105);

SELECT * FROM user LIMIT 2;

INSERT INTO post
(postID, content, userID)
VALUES
(101, "Hello World!", 3),
(102, "Bye Bye", 1),
(103, "Hello Delta", 3);

SELECT * FROM post;

SELECT name,age
FROM user
WHERE age >= 16;

INSERT INTO user
(id, age , name, email, followers, followings)
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@gmail.com", 1000, 100);


SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

UPDATE user
SET followers = 600
WHERE age = 16;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM user
WHERE age = 15;

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

ALTER TABLE user
DROP COLUMN age;

ALTER TABLE user
RENAME TO instaUser;

ALTER TABLE instaUser
RENAME TO user;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT * FROM user;