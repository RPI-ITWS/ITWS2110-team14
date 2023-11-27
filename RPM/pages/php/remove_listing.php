<?php
/*The following code removes a listing from the marketplace by changing its active status to FALSE*/
//DB Credentials
$host = "localhost";
$dbName = "rpm";
$username = 'root';
$password = 'M4k3t14!';

session_start();

if (isset($_POST["submit"]) && isset($_SESSION["rcs_id"])) { //Get repsonse from remove listing button
  $updatedStatus = FALSE;
  $rcs_id = $_SESSION["rcs_id"];
  $listing_id = $_POST["listing_id"];
  $dbIsConnected = mysqli_connect($host, $username, $password, $dbName);
  if (!empty($listingTitle)) {
    if (!$dbIsConnected) { //Was not able to establish connection to rpm
      die(mysqli_connect_error());
    } 
    else { //Connection has been established to rpm
      $updateStatus = "UPDATE listings SET active = '$updatedStatus' WHERE listing_id = '$listing_id'";
      if (mysqli_query($dbIsConnected, $updateStatus)) { //SQL Statement was successfully executed
        echo "Listing removed";
        header("Location: ../pages/marketplace/index.html");
        exit();
      }
      else { //Error occurred while executing query
        echo "Could not remove listing. Try again!";
      }
    }
  }
  else {
    echo "Could not find listing!";
  }
}