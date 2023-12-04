
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firestName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phoneNumber = $_POST['phoneNumber'];
    $livingSpace = $_POST['livingSpace'];
    // Continue for all form fields...

    // Validate the image file
    $profileImage = $_FILES['profileImage'];
    $fileType = pathinfo($profileImage['name'], PATHINFO_EXTENSION);
    $fileSize = $profileImage['size'];
    
    if ($fileType != "png" || $fileSize > 5000000) {
      header("Location: index.html?error=Invalid image file");
      exit();
    }else{
      $targetDir = "/RPM/pages/user/profile/images/";
      $targetFile = $targetDir . basename($_FILES['listingImage']['name']);
      if (move_uploaded_file($_FILES['listingImage']['tmp_name'], $targetFile)) {
        // The file has been moved successfully

        // Save the path to the image in the database
        $listingImage = $targetFile;
      } else {
        // header to index page with error
        header("Location: index.html?error=Sorry, there was an error uploading your file.");
      }
    }

    // Connect to the database
    include_once("../../../database/connect.php");

    // Retrieve the current user data
    // Assuming you have a session variable 'user_id' for the current user
    $stmt = $pdo->prepare("SELECT * FROM users WHERE rcs_id = :id");
    $stmt->execute(array(':id' => $_SESSION['rcs_id']));
    $currentUser = $stmt->fetch(PDO::FETCH_ASSOC);

    // Compare the form data with the current user data
    // Prepare an SQL UPDATE statement if the data differs
    $sql = "UPDATE users SET ";
    $params = array();
    if ($firstName != $currentUser['first_name']) {
      $sql .= "first_name = :firstName, ";
      $params[':firstName'] = $firstName;
    }
    if ($lastName != $currentUser['last_name']) {
      $sql .= "last_name = :lastName, ";
      $params[':lastName'] = $lastName;
    }
    if ($phoneNumber != $currentUser['phone_number']) {
      $sql .= "phone_number = :phoneNumber, ";
      $params[':phoneNumber'] = $phoneNumber;
    }
    if ($livingSpace != $currentUser['user_location']) {
      $sql .= "user_location = :livingSpace, ";
      $params[':livingSpace'] = $livingSpace;
    }
    if($listingImage != $currentUser['image_path']){
      $sql .= "image_path = :profileImage, ";
      $params[':profileImage'] = $listingImage;
    }

    // Remove the trailing comma and add the WHERE clause
    $sql = rtrim($sql, ', ') . " WHERE rcs_id = :id";
    $params[':id'] = $_SESSION['rcs_id'];

    // Execute the SQL statement
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    header("Location: index.html?success=Profile updated");
  }
?>
