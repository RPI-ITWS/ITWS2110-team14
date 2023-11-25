<?php 
// Connect to the database
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  // try {
    //RPM database credentials
    // $dsn = 'mysql:host=localhost;dbname=rpm';
    $host = "localhost";
    $dbName = "rpm";
    $username = 'root';
    $password = 'M4k3t14!';

    // $pdo = new PDO($dsn, $username, $password);

    // //Connection to the database and its tables
    // $selectData = "SELECT JSON_OBJECT('listings', rpm_data.json) FROM RPM_data WHERE title = 'listings'";
    // $stmt = $pdo -> query($selectData);

    // $data = $stmt-> fetch(PDO::FETCH_ASSOC);

    if (isset($_POST["submit"])) { //Getting data from form
      $listingTitle = $_POST["listingTitle"];
      $listingPrice = $_POST["listingPrice"];
      $listingCondition = $_POST["listingCondition"];
      $listingDescription = $_POST["listingDescription"];
      $listingImage = $_POST["listingImage"];
      $listingColor = $_POST["listingColor"];
      $rcs_id = NULL;
      $clicks = 0;
      date_default_timezone_set('America/New_York'); //Ensuring the date is all in the same timezone (NY)
      $listingDate = date('Y-m-d');


      //Connecting to db and adding the form data
      if (!empty($listingTitle) && !empty($listingPrice) && !empty($listingCondition) && !empty($listingDescription) && !empty($listingImage) && !empty($listingColor)) {
        $dbIsConnected = mysqli_connect($host, $username, $password, $dbName);
        if (!$dbIsConnected) {
          die(mysqli_connect_error());
        }
        else {
          $insertData = "INSERT INTO LISTINGS (rcs_id, active, color, item_condition, clicks, item_description, listing_title, posting_date, price) VALUES ('$rcs_id', '$active', '$listingColor', '$listingCondition', '$clicks', '$listingDescription', '$listingTitle', '$listingDate', '$listingPrice')";
          if (mysqli_query($dbIsConnected, $insertData)) {
            echo "Listing Created";
            header("Location: ../pages/marketplace/index.html"); //Redirect user back to main page
            exit();
          }
          else {
            echo "Error in creating listing";
          }
        }
      }
      else {
        echo "Please provide information to each field";
      }
    }
  // }
  // catch (PDOException $e) {
     // Handle database connection or query errors
    echo json_encode(['error' => 'Failed to retrieve content. ' . $e->getMessage()]);
  // }
?>