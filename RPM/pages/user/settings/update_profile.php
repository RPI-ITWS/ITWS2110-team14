
<?php
  
  // Connect to the database

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  include_once("../../../database/connect.php");


  // //Connection to the database and its tables
  // $selectData = "SELECT JSON_OBJECT('listings', rpm_data.json) FROM RPM_data WHERE title = 'listings'";
  // $stmt = $pdo -> query($selectData);

  // $data = $stmt-> fetch(PDO::FETCH_ASSOC);


  if (isset($_POST["save"]) && isset($_SESSION["rcs_id"])) { //Getting data from form
    // validate the image
    if (isset($_FILES['profileImage']) && $_FILES['profileImage']['error'] == UPLOAD_ERR_OK) {
      $finfo = new finfo(FILEINFO_MIME_TYPE);
      $mime = $finfo->file($_FILES['profileImage']['tmp_name']);

      if ($mime == 'image/png') {
        // The uploaded file is a PNG image

        // Check the file size
        $size = $_FILES['profileImage']['size'];
        $maxSize = 5000000; // Maximum file size in bytes (5MB)

        if ($size <= $maxSize) {
          // The file size is acceptable
          // Move the uploaded file to the images directory
          $dbDir = "/RPM/pages/user/profile/images/";
          $targetDir = "../profile/images/";
          $targetFile = $targetDir . $_SESSION['rcs_id'] . "-" . basename($_FILES['profileImage']['name']);
          $dbFile = $dbDir . $_SESSION['rcs_id'] . "-" . basename($_FILES['profileImage']['name']);
          if (move_uploaded_file($_FILES['profileImage']['tmp_name'], $targetFile)) {
            // The file has been moved successfully

            // Save the path to the image in the database
            $listingImage = $dbFile;
          } else {
            // header to index page with error
            // Check if directory exists and is writable
            if (!is_dir($targetDir) || !is_writable($targetDir)) {
                die("Directory does not exist or is not writable: " . $targetDir);
            }
            // Check file size against upload_max_filesize directive
            if ($_FILES['profileImage']['size'] > ini_get('upload_max_filesize')) {
                die("File size exceeds maximum allowed size");
            }
            die("Unknown error occurred");
            // header("Location: index.html?error=Sorry, there was an error uploading your file.");
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
      // No file was uploaded
      // echo "No file was uploaded.";
      $listingImage = "";
    }


    //Getting data from form 
    $first_name = isset($_POST["firstName"]) ? htmlspecialchars($_POST["firstName"], ENT_QUOTES, 'UTF-8') : "";
    $last_name = isset($_POST["lastName"]) ? htmlspecialchars($_POST["lastName"], ENT_QUOTES, 'UTF-8') : "";
    $phone_number = isset($_POST["phoneNumber"]) ? htmlspecialchars($_POST["phoneNumber"], ENT_QUOTES, 'UTF-8') : "";
    $user_location = isset($_POST["userLocation"]) ? htmlspecialchars($_POST["userLocation"], ENT_QUOTES, 'UTF-8') : "";
    $image_path = $listingImage;
    //print data to check if working
    // echo $first_name . "<br>";
    // echo $last_name . "<br>";
    // echo $phone_number . "<br>";
    // echo $user_location . "<br>";
    // echo $image_path . "<br>";
    //Inserting data into the database
    
    // Retrieve the current user data
    // Assuming you have a session variable 'user_id' for the current user
    $stmt = $pdo->prepare("SELECT * FROM users WHERE rcs_id = :id");
    $stmt->execute(array(':id' => $_SESSION['rcs_id']));
    $currentUser = $stmt->fetch(PDO::FETCH_ASSOC);

    // Compare the form data with the current user data
    // Prepare an SQL UPDATE statement if the data differs
    $sql = "UPDATE users SET ";
    $params = array();
    if ($first_name != $currentUser['first_name'] && $first_name != "") {
      $sql .= "first_name = :firstName, ";
      $params[':firstName'] = $first_name;
    }
    if ($last_name != $currentUser['last_name'] && $last_name != "") {
      $sql .= "last_name = :lastName, ";
      $params[':lastName'] = $last_name;
    }
    if ($phone_number != $currentUser['phone_number'] && $phone_number != "") {
      $sql .= "phone_number = :phoneNumber, ";
      $params[':phoneNumber'] = $phone_number;
    }
    if ($user_location != $currentUser['user_location'] && $user_location != "") {
      $sql .= "user_location = :userLocation, ";
      $params[':userLocation'] = $user_location;
    }
    if($image_path != $currentUser['image_path'] && $image_path != ""){
      $sql .= "image_path = :profileImage, ";
      $params[':profileImage'] = $image_path;
    }

    if (count($params) > 0) { // More than just the :id parameter
      // Remove the trailing comma and add the WHERE clause
      $sql = rtrim($sql, ', ') . " WHERE rcs_id = :id";
      $params[':id'] = $_SESSION['rcs_id'];

      // Execute the SQL statement
      $stmt = $pdo->prepare($sql);
      $stmt->execute($params);

      header("Location: index.html?success=Profile updated");
    } else {
      // No fields to update
      // Handle this case as needed
      header("Location: index.html?success=No fields to update");
    }
  }

?>
