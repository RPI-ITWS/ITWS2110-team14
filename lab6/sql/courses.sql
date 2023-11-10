CREATE TABLE IF NOT EXISTS courses (
  crn INT(11) PRIMARY KEY,
  prefix VARCHAR(4) NOT NULL,
  num SMALLINT(4) NOT NULL,
  title VARCHAR(255) NOT NULL
);
ALTER TABLE courses
  ADD COLUMN section INT(2),
  ADD COLUMN yyyy INT(4);

INSERT INTO courses(crn, prefix, num, title)
  VALUES (63146, "ITWS", 2010, "Web-Systems Development"),
        (63847, "CSCI", 2500, "Computer Organization"),
        (62129, "CSCI", 2200, "Foundations of Computer Science"),
        (61471, "MATH", 2010, "Multivariable Calculus & Matrix Algebra");

ALTER TABLE courses
ADD COLUMN course_json JSON;

UPDATE courses
SET course_json = '{
  "Websys_course": [
    {
      "Lectures":
      {
        "Lecture1":
        {
          "title": "8/29 Introduction to Web Systems",
          "description": "This lecture introduces the course and the basic concepts of web systems.",
          "link": ["https://docs.google.com/presentation/d/108X6S-Xjn_RWOtriaLqWZhVgV6sYk4KXIpAobzW2HbI/edit#slide=id.p"]
        },
        "Lecture2":
        {
          "title": "9/8 Choose your own adventure",
          "description": "Basics of Web Sys or Git/Github lecture.",
          "link": ["https://docs.google.com/presentation/d/1jZV3MJSI0rRpbwSsD3cIHG81N-p9wMFpAsG9MXZK30A/edit?usp=sharing", 
          "https://docs.google.com/presentation/d/1AAqHOY4yykSkNBdf_KzP5WfjE6lkkm9MJ_8ZOXBiOd4/edit?usp=sharing"]
        },
        "Lecture3":
        {
          "title": "9/12: Markup languages",
          "description": "Lecture on basic markup languages.",
          "link": ["https://drive.google.com/file/d/1R3rh_VvkP7LpuCp4T17P8wZEoETcXOLh/view?usp=sharing"]
        },
        "Lecture4":
        {
          "title": "9/15: CSS",
          "description": "Intro to CSS and front end styling.",
          "link": ["https://docs.google.com/presentation/d/13l9w_KRL1IEO2GLHJj4P4IJ6PY7_lB2q/edit?usp=sharing&ouid=101431771635793895949&rtpof=true&sd=true",
          "https://docs.google.com/presentation/d/1X9aAnFKEc3PYCNgS46zyn32CgX9oCD5UjPqwzPDii-M/edit?usp=sharing"]
        },
        "Lecture5":
        {
          "title": "9/22: JSON, AJAX, APIs",
          "description": "Intro to APIs, JSON, and AJAX functionality",
          "link": ["https://docs.google.com/presentation/d/1tKj67JL_ex72SwJdO7IaWOeJiVjKjwDRTQ2HGNSxbIo/edit?usp=sharing",
          "https://docs.google.com/presentation/d/15RDN4Vpp8mSGlp-XS22-RsMf33Xdv9vHJ9JGS0arpLI/edit?usp=sharing",
          "https://docs.google.com/presentation/d/13zQaEmzgy7yJ5tInYNZmxt04m9FOT1PxS1YZqZsW7tE/edit?usp=sharing"]
        },
        "Lecture6":
        {
          "title":"9/26: Security, part 1",
          "description": "Intro to security and the basics of different red and blue team tactics.",
          "link": ["https://google-gruyere.appspot.com/",
          "https://owasp.org/www-project-top-ten/",
          "https://owasp.org/Top10/",
          "https://youtu.be/uu7o6hEswVQ?list=PLyqga7AXMtPOguwtCCXGZUKvd2CDCmUgQ"]

        },
        "Lecture7":
        {
          "title": "10/6: Generative AI",
          "description": "This lecture is on the limitations of generative AI and the benefits of them.",
          "link": ["https://www.bloorresearch.com/2023/09/generative-ai-case-studies-and-limitations/", 
          "https://www.harvardonline.harvard.edu/blog/benefits-limitations-generative-ai"]
        },
        "Lecture8":
        {
          "title": "10/10: Quiz review & Front-End Optimization",
          "description": "This lecture is on the basics of optimization and how to optimize a website.",
          "link": ["https://docs.google.com/presentation/d/1e6rstQNTcUzl04qNhBUkLpRFqZMQ1Ife5EXRb9GN_sI/edit?usp=sharing",
          "https://docs.google.com/presentation/d/12NxeJ0WqfjWPSjBPL-36b2ssxYyP7UJFiX5276PMwd8/edit?usp=sharing"]
        },
        "Lecture9":
        {
          "title": "10/27: UI/UX, phpmyadmin",
          "description": "This lecture is on the basics of UI/UX and phpmyadmin.",
          "link": ["https://docs.google.com/document/d/17MrP6zhCK889NgYJV4J-Xlm3pajrrSIg/edit?usp=sharing&ouid=101431771635793895949&rtpof=true&sd=true"]
        }
      },
      "Labs":
      {
        "Lab1":
        {
          "title": "9/1 Lab 1: Group/Individual Portfolio Page",
          "description": "Creating a page with resumes for your group.",
          "link": ["https://docs.google.com/document/d/1TVsVEJKSUBs4KEwSUe6QFsp-t_a8h4s1toh9jjKjHfw/edit?usp=sharing"]
        },
        "Lab2":
        {
          "title": "9/8 Lab 2: Contitution Webpage",
          "description": "Create a website about the United States Constituition with responces.",
          "link": ["https://docs.google.com/document/d/1A3B7FTbxIw71oOCAiBsfEHdHcXeef1gjrXsG-VI6e-U/edit?usp=sharing"]
        },
        "Lab3":
        {
          "title": "9/22 Lab 3: JSON, AJAX, APIs",
          "description": "Creating a website using the OpenWeatherMap API and an additional API.",
          "link": ["https://docs.google.com/document/d/1-D4VYKxBo2OnHR4Pyg9kPkoQajd3vsBgHUzRvdlo6Xw/edit?usp=sharing"]
        },
        "Lab4":
        {
          "title": "10/6 Lab 4: Generative AI",
          "description": "Recreating the ITWS website using only generative AI.",
          "link": ["https://docs.google.com/document/d/1SoU_8JJEjfdOLIclXF4TeXEFFYbXKTH9IWUG2gHSazY/edit?usp=sharing"]
        },
        "Lab5":
        {
          "title": "10/24 Lab 5: Front End Optimization",
          "description": "Make 7 Optimizations to Professor Callahans FreeBee Site.",
          "link": ["https://docs.google.com/document/d/1u3gqViUz15LTJ-6F0aucM_EP9gzus1L09BgqOMy8nvA/edit?usp=sharing"]
        },
        "Lab6":
        {
          "title": "10/31 Lab 6: PHP and mySQL",
          "description": "Recreating the spookiest website of all, LMS.",
          "link": ["https://docs.google.com/document/d/1oC6BOAmPbR0p6j_DWXWK_FInNgT8JaiUAwMWEnQf4Vw/edit?usp=sharing"]
        }
      }
      
    }
  ]
}'
WHERE title = 'Web-Systems Development';
