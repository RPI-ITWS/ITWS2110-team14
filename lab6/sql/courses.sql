CREATE TABLE IF NOT EXISTS courses {
  crn INT(11) PRIMARY KEY,
  prefix VARCHAR(4) NOT NULL,
  num SMALLINT(4) NOT NULL,
  title VARCHAR(255) NOT NULL
};

ALTER TABLE courses
  ADD COLUMN section INT(2),
  ADD COLUMN yyyy INT(4);

INSERT INTO courses(crn, prefix, num, title) --Web Sys
  VALUES (63146, "ITWS", 2010, "Web-Systems Development");

INSERT INTO courses(crn, prefix, num, title) --Comp org
  VALUES (63847, "CSCI", 2500, "Computer Organization");

INSERT INTO courses(crn, prefix, num, title) --FOCS
  VALUES (62129, "CSCI", 2200, "Foundations of Computer Science");

INSERT INTO courses(crn, prefix, num, title) --Multi
  VALUES (61471, "MATH", 2010, "Multivariable Calculus & Matrix Algebra");