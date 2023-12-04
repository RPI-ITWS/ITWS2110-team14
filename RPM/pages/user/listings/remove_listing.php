<?php
/*The following code removes a listing from the marketplace by changing its active status to FALSE*/

// Connect to the database
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
include_once("../../database/connect.php");

try {
  if (isset($_SESSION["rcs_id"])) { //Get repsonse from remove listing button
    $updatedStatus = FALSE;
    $rcs_id = $_SESSION["rcs_id"];
    $listing_id = $_POST["listing_id"];
    $dbIsConnected = mysqli_connect($host, $username, $password, $dbName);
    if (!empty($listingTitle)) {
      $updateStatus = $pdo->prepare("UPDATE listings SET active = :updatedStatus WHERE listing_id = :listingId");
      $updateStatus->bindParam(array(':updatedStatus' => $updatedStatus, ':listingId' => $listing_id));
      $updateStatus->execute();
      echo "Listing removed";
      header("Location: index.html");
      exit();
    } 
  }
}

catch (PDOException $e) { //Issue occured
  echo "Connection failed: " . $e->getMessage();
}