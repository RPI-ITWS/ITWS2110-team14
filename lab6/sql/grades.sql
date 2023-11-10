CREATE TABLE IF NOT EXISTS grades (
  id INT(4) AUTO_INCREMENT PRIMARY KEY,
  crn INT(11),
  grade INT(3) NOT NULL,
  rin INT(9),
  FOREIGN KEY (crn) REFERENCES courses(crn),
  FOREIGN KEY (rin) REFERENCES students(rin)
);

INSERT INTO grades(crn, grade, rin)
  VALUES (63146, 82, 123456789),
        (63847, 97, 123456789),
        (62129, 76, 123456789),
        (61471, 89, 123456789),

        (63146, 62, 123456780),
        (63847, 90, 123456780),
        (62129, 92, 123456780),
        (61471, 87, 123456780),

        (63146, 95, 123456788),
        (63847, 79, 123456788),
        (62129, 34, 123456788),
        (61471, 92, 123456788),
        
        (63146, 85, 123456781),
        (63847, 85, 123456781),
        (62129, 85, 123456781),
        (61471, 85, 123456781);