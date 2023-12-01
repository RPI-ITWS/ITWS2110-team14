<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  include_once("../../database/connect.php");
  include_once("../../database/check_login.php");

  $stmt = $pdo->prepare("SELECT * FROM listings ORDER BY price ASC"); //Top listings are the cheaper ones or free
  $stmt->execute();
  $listings = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $listings = json_encode($listings);
  echo $listings;
?>