--Step 7
SELECT * FROM students ORDER BY rin ASC, lastname ASC, rcsid ASC, firstname ASC;

--Step 8
SELECT students.rin, CONCAT(students.firstname, ' ', students.lastname) AS studentname, students.street, students.city,
  students.stateabbr, students.zip FROM students JOIN grades ON students.rin = grades.rin
  WHERE grades.grade > 90;

--Step 9
SELECT courses.crn, courses.title, AVG(grades.grade) AS averagegrade FROM courses
  JOIN grades ON courses.crn = grades.crn
  GROUP BY courses.crn, courses.title;

--Step 10
SELECT courses.crn, courses.title, COUNT(DISTINCT students.rin) AS totalstudents FROM courses
  JOIN grades ON courses.crn = grades.crn JOIN students ON grades.rin = students.rin
  GROUP BY courses.crn, courses.title;
