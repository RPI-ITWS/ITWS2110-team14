CREATE TABLE IF NOT EXISTS grades {
  id INT(4) AUTO_INCREMENT PRIMARY KEY,
  crn INT(11),
  grade INT(3) NOT NULL,
  rin INT(9),
  FOREIGN KEY (crn) REFERENCES courses(crn),
  FOREIGN KEY (rin) REFERENCES students(rin),
  FOREIGN KEY (grade) 
};

INSERT INTO grades(id, crn, grade, rin) --Student 1, grade 1
  VALUES (0000, 63146, 82, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 1, grade 2
  VALUES (0001, 63847, 97, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 1, grade 3
  VALUES (0002, 62129, 76, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 1, grade 4
  VALUES (0003, 61471, 89, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 2, grade 1
  VALUES (0004, 63146, 62, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 2, grade 2
  VALUES (0005, 63847, 90, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 2, grade 3
  VALUES (0006, 62129, 92, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 2, grade 4
  VALUES (0007, 61471, 87, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 3, grade 1
  VALUES (0008, 63146, 95, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 3, grade 2
  VALUES (0009, 63847, 79, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 3, grade 3
  VALUES (0010, 62129, 34, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 3, grade 4
  VALUES (0011, 61471, 92, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 4, grade 1
  VALUES (0012, 63146, 85, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 4, grade 2
  VALUES (0013, 63847, 85, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 4, grade 3
  VALUES (0014, 62129, 85, 123456789);

INSERT INTO grades(id, crn, grade, rin) --Student 4, grade 4
  VALUES (0015, 61471, 85, 123456789);