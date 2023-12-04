<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  include_once("../../../database/connect.php");
  include_once("../../../database/check_login.php");

  if(isset($_POST['rcs_id'])) {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE rcs_id = :id");
    $stmt->execute(array(':id' => $_POST['rcs_id']));
    $seller = $stmt->fetch(PDO::FETCH_ASSOC);
    $seller = json_encode($listing);
    echo $seller;
  }
  else {
    echo "No ID";
  }

?>