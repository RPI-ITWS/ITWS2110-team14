CREATE TABLE IF NOT EXISTS students (
  rin INT(9) PRIMARY KEY,
  rcsid CHAR(7),
  firstname VARCHAR(101) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  alias VARCHAR(100) NOT NULL,
  phone VARCHAR(10)
);

ALTER TABLE students 
  ADD COLUMN street VARCHAR(255),
  ADD COLUMN city VARCHAR(100),
  ADD COLUMN stateabbr VARCHAR(2),
  ADD COLUMN zip INT(5);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 1
  VALUES (123456789, "chasej1", "jamarr", "chase", "uno", "518-002-0234", "Paycor Stadium", "Cincinnati", "OH", 45201);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 2
  VALUES (123456780, "burrowj9", "joe", "burrow", "joe brr", "518-002-1234", "Paycor Stadium", "Cincinnati", "OH", 45201);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 3
  VALUES (123456788, "higginst5", "tee", "higgins", "fake chad", "518-102-0234", "Paycor Stadium", "Cincinnati", "OH", 45201);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 4
  VALUES (123456781, "ochoc85", "chad", "johnson", "ocho", "518-012-0234", "Paycor Stadium", "Cincinnati", "OH", 45201);
