<?php
  /*The following code removes a listing from the marketplace by changing its active status to FALSE*/

  // Connect to the database
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  include_once("../../../database/connect.php");

  try {
    if (isset($_POST["listing_id"])) {
      $listing_id = $_POST["listing_id"];
    } else {
      // Handle the error
      echo json_encode(array('success' => false, 'message' => 'No listing ID provided'));
      exit();
    }
    if (isset($_SESSION["rcs_id"])) { //Get response from remove listing button
      $updatedStatus = FALSE;
      $rcs_id = $_SESSION["rcs_id"];
      $listing_id = $_POST["listing_id"];
      if (!empty($listing_id)) {
        $updateStatus = $pdo->prepare("UPDATE listings SET active = :updatedStatus WHERE listing_id = :listingId");
        $updateStatus->bindParam(array(':updatedStatus' => $updatedStatus, ':listingId' => $listing_id));
        $updateStatus->execute();

        // Return a JSON response
        echo json_encode(array('success' => true, 'message' => 'Listing removed'));
      } else {
        // Return a JSON response
        echo json_encode(array('success' => false, 'message' => 'No listing ID provided'));
      }
    }
  }

  catch (PDOException $e) { //Issue occurred
    // Return a JSON response
    echo json_encode(array('success' => false, 'message' => 'Connection failed: ' . $e->getMessage()));
  }
?>