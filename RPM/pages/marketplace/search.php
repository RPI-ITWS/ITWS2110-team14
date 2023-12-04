<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  include_once("../../database/connect.php");
  // include_once("../../database/check_login.php");
  
  $stmt = $pdo->prepare("SELECT * FROM listings WHERE listing_title LIKE :listing_title ORDER BY price ASC");
  $stmt->bindValue(':listing_title', '%' . $_GET['listing_title'] . '%');
  
  $stmt->execute();
  $listings = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $listings = json_encode($listings);
  echo $listings;
?>