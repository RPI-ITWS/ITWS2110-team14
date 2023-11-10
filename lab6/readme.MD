# LINK: http://college-marketplace-group14.eastus.cloudapp.azure.com/lab6/

\*Issues stemmed from mySQL storage issue, where the server would gradually shut down quicker and quicker, not allowing the user to create the necessary features
There were also a number of issue making the php. When there was an error in the code it would jsut return a 500 error without much of a description.
Found a way to print those errors and figure out what was going on and fix them. There were also some server connection issues in the proccess that slowed everything down but those usually had a simple fix. Another large issue was returning a json object from the database. Took a while to figure out but with a bunch of googling, we found a stack exchange post detailign a fix and it worked for us. Overall we learned a lot in the process of making this lab and it was a good experience.

1. Assumption that section is a two digit number

Part 2:
------COMMAND LOG-----

1. ALTER TABLE students
   ADD COLUMN street VARCHAR(255),
   ADD COLUMN city VARCHAR(100),
   ADD COLUMN stateabbr VARCHAR(2),
   ADD COLUMN zip INT(5);

2. ALTER TABLE courses
   ADD COLUMN section INT(2),
   ADD COLUMN yyyy INT(4)

3. CREATE TABLE IF NOT EXISTS grades (
   id INT(4) AUTO_INCREMENT PRIMARY KEY,
   crn INT(11),
   grade INT(3) NOT NULL,
   rin INT(9),
   FOREIGN KEY (crn) REFERENCES courses(crn),
   FOREIGN KEY (rin) REFERENCES students(rin)
   );

4. INSERT INTO courses(crn, prefix, num, title)
   VALUES (63146, "ITWS", 2010, "Web-Systems Development"),
   (63847, "CSCI", 2500, "Computer Organization"),
   (62129, "CSCI", 2200, "Foundations of Computer Science"),
   (61471, "MATH", 2010, "Multivariable Calculus & Matrix Algebra");

5. INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 1
   VALUES (123456789, "chasej1", "jamarr", "chase", "uno", "518-002-0234", "Paycor Stadium", "Cincinnati", "OH", 45201);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 2
VALUES (123456780, "burrowj9", "joe", "burrow", "joe brr", "518-002-1234", "Paycor Stadium", "Cincinnati", "OH", 45201);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 3
VALUES (123456788, "higginst5", "tee", "higgins", "fake chad", "518-102-0234", "Paycor Stadium", "Cincinnati", "OH", 45201);

INSERT INTO students(rin, rcsid, firstname, lastname, alias, phone, street, city, stateabbr, zip) --student 4
VALUES (123456781, "ochoc85", "chad", "johnson", "ocho", "518-012-0234", "Paycor Stadium", "Cincinnati", "OH", 45201);

6. INSERT INTO grades(crn, grade, rin)
   VALUES (63146, 82, 123456789),
   (63847, 97, 123456789),
   (62129, 76, 123456789),
   (61471, 89, 123456789),
   (63146, 62, 123456789),
   (63847, 90, 123456789),
   (62129, 92, 123456789),
   (61471, 87, 123456789),
   (63146, 95, 123456789),
   (63847, 79, 123456789),
   (62129, 34, 123456789),
   (61471, 92, 123456789),
   (63146, 85, 123456789),
   (63847, 85, 123456789),
   (62129, 85, 123456789),
   (61471, 85, 123456789);

7. SELECT \* FROM students ORDER BY rin ASC, lastname ASC, rcsid ASC, firstname ASC;

8. SELECT students.rin, CONCAT(students.firstname, ' ', students.lastname) AS studentname, students.street, students.city,
   students.stateabbr, students.zip FROM students JOIN grades ON students.rin = grades.rin
   WHERE grades.grade > 90;

9. SELECT courses.crn, courses.title, AVG(grades.grade) AS averagegrade FROM courses
   JOIN grades ON courses.crn = grades.crn
   GROUP BY courses.crn, courses.title;

10. SELECT courses.crn, courses.title, COUNT(DISTINCT students.rin) AS totalstudents FROM courses
    JOIN grades ON courses.crn = grades.crn JOIN students ON grades.rin = students.rin
    GROUP BY courses.crn, courses.title;

**ALL COMMANDS CAN BE ALSO FOUND ON TEAM 14's GITHUB**

# Sources:

https://mariadb.com/kb/en/json-functions/ - used to learn about json functions with mariaDB
https://www.w3schools.com/php/php_mysql_insert.asp - used to learn about basic mysql functions
https://dba.stackexchange.com/questions/192208/mysql-return-json-from-a-standard-sql-query - used to debug issues with returning a json object
