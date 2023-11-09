CREATE TABLE IF NOT EXISTS students (
  rin INT(9) PRIMARY KEY,
  rcsid CHAR(7),
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  alias VARCHAR(100) NOT NULL,
  phone VARCHAR(10)
);

ALTER TABLE students 
  ADD COLUMN street VARCHAR(255),
  ADD COLUMN city VARCHAR(100),
  ADD COLUMN stateabbr VARCHAR(2),
  ADD COLUMN zip INT(5);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip)
  VALUES (123456789, "chasej1", "jamarr", "chase", "uno", "5180020234", "Paycor Stadium", "Cincinnati", "OH", 45201),
        (123456780, "burroj9", "joe", "burrow", "joe brr", "5180021234", "Paycor Stadium", "Cincinnati", "OH", 45201),
        (123456788, "higgit5", "tee", "higgins", "fake chad", "5181020234", "Paycor Stadium", "Cincinnati", "OH", 45201),
        (123456781, "ochoc85", "chad", "johnson", "ocho", "5180120234", "Paycor Stadium", "Cincinnati", "OH", 45201);
