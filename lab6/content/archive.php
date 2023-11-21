<?php
  // Connect to the database
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  try {
    $dsn = 'mysql:host=localhost;dbname=lab6';
    $username = 'root';
    $password = 'M4k3t14!';

    $pdo = new PDO($dsn, $username, $password);

    // Retrieve JSON data from the Web Sys course
    $sql = "SELECT JSON_OBJECT('Websys_course',course_json) FROM courses WHERE title = 'Web-Systems Development';";
    $stmt = $pdo->query($sql);

    $data1 = $stmt->fetch(PDO::FETCH_ASSOC);
    
    $json = $data1['JSON_OBJECT(\'Websys_course\',course_json)'] ;

    //create new tables if they do not exist

    $sql1 = "CREATE TABLE IF NOT EXISTS lectures_archive (
      id INT PRIMARY KEY AUTO_INCREMENT,
      course_id INT, -- Foreign key to courses table
      title VARCHAR(255),
      description TEXT,
      slideshow_link VARCHAR(255),

      FOREIGN KEY (course_id) REFERENCES courses(crn)
      );";
    $pdo->query($sql1);

    $sql2 = "CREATE TABLE IF NOT EXISTS labs_archive (
      id INT PRIMARY KEY AUTO_INCREMENT,
      course_id INT, -- Foreign key to courses table
      title VARCHAR(255),
      description TEXT,
      instructions_link VARCHAR(255),

      FOREIGN KEY (course_id) REFERENCES courses(crn)
      );";
    $pdo->query($sql2);
    
    // echo($json);

    // Decode JSON data
    $data = json_decode($json, true);
    

    // Insert lecture data into the lectures_archive table
    foreach ($data['Websys_course']['Websys_course'][0]['Lectures'] as $title => $lecture) {
        // Insert data into lectures_archive table
        // print_r($lecture['title']."<br>");
        // print_r($lecture['description']."<br>");
        // print_r($lecture['link'][0]."<br>");

        $sql = "INSERT INTO lectures_archive (course_id, title, description, slideshow_link) VALUES 
        (63146, '".$lecture['title']."', '".$lecture['description']."', '".$lecture['link'][0]."');";
        $pdo->query($sql);
    }

    // Insert lab data into the labs_archive table
    foreach ($data['Websys_course']['Websys_course'][0]['Labs'] as $title => $lab) {
        // Insert data into labs_archive table
        // print_r($lab['title']."<br>");
        // print_r($lab['description']."<br>");
        // print_r($lab['link'][0]."<br>");
        $sql = "INSERT INTO labs_archive (course_id, title, description, instructions_link) VALUES 
        (63146, '".$lab['title']."', '".$lab['description']."', '".$lab['link'][0]."');";

        $pdo->query($sql);
    }
    header("Location: ../index.html");

  } catch (PDOException $e) {
    // Handle database connection or query errors
    echo json_encode(['error' => 'Failed to retrieve content. ' . $e->getMessage()]);
  }
?>
