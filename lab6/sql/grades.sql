CREATE TABLE IF NOT EXISTS grades {
  id INT AUTO_INCREMENT PRIMARY KEY,
  crn INT(11),
  grade INT(3) NOT NULL,
  rin INT(9),
  FOREIGN KEY (crn) REFERENCES courses(crn),
  FOREIGN KEY (rin) REFERENCES students(rin),
  FOREIGN KEY (grade) 
};