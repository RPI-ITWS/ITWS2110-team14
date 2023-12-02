<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  include_once("../../../database/connect.php");
  include_once("../../../database/check_login.php");

  if(isset($_POST['id'])) {
    $stmt = $pdo->prepare("SELECT * FROM listings WHERE listing_id = :id");
    $stmt->execute(array(':id' => $_POST['id']));
    $listing = $stmt->fetch(PDO::FETCH_ASSOC);
    $listing = json_encode($listing);
    echo $listing;
  }
  else {
    echo "No ID";
  }

?>