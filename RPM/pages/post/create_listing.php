<?php 
// Connect to the database

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  include_once("../../database/connect.php");
  
  

    // //Connection to the database and its tables
    // $selectData = "SELECT JSON_OBJECT('listings', rpm_data.json) FROM RPM_data WHERE title = 'listings'";
    // $stmt = $pdo -> query($selectData);

    // $data = $stmt-> fetch(PDO::FETCH_ASSOC);


  if (isset($_POST["submit"]) && isset($_SESSION["rcs_id"])) { //Getting data from form
    // validate the image
    if (isset($_FILES['listingImage']) && $_FILES['listingImage']['error'] == UPLOAD_ERR_OK) {
      $finfo = new finfo(FILEINFO_MIME_TYPE);
      $mime = $finfo->file($_FILES['listingImage']['tmp_name']);

      if ($mime == 'image/png') {
        // The uploaded file is a PNG image
          
        // Check the file size
        $size = $_FILES['listingImage']['size'];
        $maxSize = 5000000; // Maximum file size in bytes (5MB)

        if ($size <= $maxSize) {
            // The file size is acceptable
            // Move the uploaded file to the images directory
          $targetDir = "../marketplace/images/";
          $targetFile = $targetDir . basename($_FILES['listingImage']['name']);
          if (move_uploaded_file($_FILES['listingImage']['tmp_name'], $targetFile)) {
            // The file has been moved successfully

            // Save the path to the image in the database
            $listingImage = $targetFile;
          } else {
            // header to index page with error
            header("Location: index.html?error=Sorry, there was an error uploading your file.");
          }
        } else {
            // The file is too large
            header("Location: index.html?error=Sorry, your file is too large.");
        }
      } else {
          // The uploaded file is not a PNG image
          // echo "Please upload a PNG image.";
          header("Location: index.html?error=Please upload a PNG image.");
      }
    } else {
      // No file was uploaded, or there was an error
      // echo "An error occurred during file upload.";
      header("Location: index.html?error=An error occurred during file upload.");
    }
    
    
    //Getting data from form 
    $listingTitle = $_POST["listingTitle"];
    $listingPrice = round(floatval($_POST["listingPrice"]), 2);
    $listingCondition = $_POST["listingCondition"];
    $listingDescription = $_POST["listingDescription"];
    
    $listingColor = $_POST["listingColor"];
    $rcs_id = $_SESSION["rcs_id"];
    date_default_timezone_set('America/New_York'); //Ensuring the date is all in the same timezone (NY)
    $listingDate = date('Y-m-d');
      
    //print data to check if working
    echo $listingTitle . " " . $listingPrice . " " . $listingCondition . " " . $listingDescription . " " . $listingImage . " " . $listingColor . " " . $rcs_id . " " . $listingDate;

    //Inserting data into the database
    $insertData = $pdo->prepare("INSERT INTO listings (rcs_id, item_condition, item_description, listing_title, posting_date, price, color, image_path) 
    VALUES (:rcs_id, :listingCondition, :listingDescription, :listingTitle, :listingDate, :listingPrice, :listingColor, :listingImage)");
    $insertData->execute(array(':rcs_id' => $rcs_id,
        ':listingCondition' => $listingCondition, 
        ':listingDescription' => $listingDescription, 
        ':listingTitle' => $listingTitle, 
        ':listingDate' => $listingDate,
        ':listingPrice' => $listingPrice, 
        ':listingColor' => $listingColor,
        ':listingImage' => $listingImage));
        

    header("Location: index.html?success=Your listing has been created.");
  }
      
    
?>