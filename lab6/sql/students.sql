CREATE TABLE IF NOT EXISTS students (
  rin INT(9) PRIMARY KEY,
  rcsid CHAR(7),
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  alias VARCHAR(100) NOT NULL,
  phone VARCHAR(10)
);

ALTER TABLE STUDENTS 
  ADD COLUMN street VARCHAR(255),
  ADD COLUMN city VARCHAR(100),
  ADD COLUMN stateabbr VARCHAR(2),
  ADD COLUMN zip INT(5);