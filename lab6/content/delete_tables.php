<?php
  // Connect to the database
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  try {
    $dsn = 'mysql:host=localhost;dbname=lab6';
    $username = 'root';
    $password = 'M4k3t14!';

    $pdo = new PDO($dsn, $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Drop the lectures_archive table
    $sql1 = "DROP TABLE IF EXISTS lectures_archive";
    $pdo->query($sql1);

    // Drop the labs_archive table
    $sql2 = "DROP TABLE IF EXISTS labs_archive";
    $pdo->query($sql2);

    // Optionally, recreate the archive tables if needed

    // Redirect back to the main page or display a success message
    header("Location: index.html");
    exit();
  } catch (PDOException $e) {
      // Handle database connection or query errors
      echo json_encode(['error' => 'Failed to retrieve content. ' . $e->getMessage()]);
  }
?>
