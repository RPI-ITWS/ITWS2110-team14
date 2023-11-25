<?php 
// Connect to the database
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  try {
    //RPM database credentials
    $dsn = 'mysql:host=localhost;dbname=rpm';
    $username = 'root';
    $password = 'M4k3t14!';

    $pdo = new PDO($dsn, $username, $password);

    //Connection to the database and its tables
    $selectData = "SELECT JSON_OBJECT('listings', rpm_data.json) FROM RPM_data WHERE title = 'listings'";
    $stmt = $pdo -> query($selectData);

    $data = $stmt-> fetch(PDO::FETCH_ASSOC);


  }
  catch (PDOException $e) {
     // Handle database connection or query errors
    echo json_encode(['error' => 'Failed to retrieve content. ' . $e->getMessage()]);
  }
?>