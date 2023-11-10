SELECT * FROM students ORDER BY rin ASC, lastname ASC, rcsid ASC, firstname ASC;

SELECT DISTINCT students.rin, CONCAT(students.firstname, ' ', students.lastname) AS studentname, students.street, students.city,
  students.stateabbr, students.zip 
FROM students 
WHERE EXISTS (
  SELECT 1
  FROM grades
  WHERE students.rin = grades.rin AND grades.grade > 90
);


SELECT courses.crn, courses.title, AVG(grades.grade) AS averagegrade FROM courses
  JOIN grades ON courses.crn = grades.crn
  GROUP BY courses.crn, courses.title;

SELECT courses.crn, courses.title, COUNT(students.rin) AS totalstudents FROM courses
  JOIN grades ON courses.crn = grades.crn JOIN students ON grades.rin = students.rin
  GROUP BY courses.crn, courses.title;