
SELECT * FROM students ORDER BY rin ASC, lastname ASC, rcsid ASC, firstname ASC;


SELECT students.rin, CONCAT(students.firstname, ' ', students.lastname) AS studentname, students.street, students.city,
  students.stateabbr, students.zip FROM students JOIN grades ON students.rin = grades.rin
  WHERE grades.grade > 90;


SELECT courses.crn, courses.title, AVG(grades.grade) AS averagegrade FROM courses
  JOIN grades ON courses.crn = grades.crn
  GROUP BY courses.crn, courses.title;


SELECT courses.crn, courses.title, COUNT(DISTINCT students.rin) AS totalstudents FROM courses
  JOIN grades ON courses.crn = grades.crn JOIN students ON grades.rin = students.rin
  GROUP BY courses.crn, courses.title;
