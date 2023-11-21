<?php
//Purpose: Retrieves the content data from the database and sends it as a JSON response

  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  try {
      // Database connection
      $dsn = 'mysql:host=localhost;dbname=lab6';
      $username = 'root';
      $password = 'M4k3t14!';

      $pdo = new PDO($dsn, $username, $password);

      // Set the PDO error mode to exception
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // Retrieve content data from the Web Sys course
      $sql = "SELECT JSON_OBJECT('Websys_course',course_json) FROM courses WHERE title = 'Web-Systems Development';";
      $stmt = $pdo->query($sql);

      $data = $stmt->fetch(PDO::FETCH_ASSOC);

      
      echo ($data['JSON_OBJECT(\'Websys_course\',course_json)'] );
      // echo json_encode($data[0]['course_json']);

      // Send JSON response
      // header('Content-Type: application/json');

      
      // if (!empty($data)) {
      //     echo json_encode($data[0]['course_json']);
      // } else {
      //     echo json_encode(['error' => 'No data found']);
      // }
  } catch (PDOException $e) {
      // Handle database connection or query errors
      echo json_encode(['error' => 'Failed to retrieve content. ' . $e->getMessage()]);
  }
?>
