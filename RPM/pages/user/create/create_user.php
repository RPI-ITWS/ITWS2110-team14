<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  // connect to db
  try{
    include_once("../../../database/connect.php");

    //Connection to the database and its tables
    if(isset($_POST["save"])){
      // $selectData = "SELECT JSON_OBJECT('users', rpm_data.json) FROM RPM_data WHERE title = 'users'";
      // $stmt = $pdo -> query($selectData);

      // $data = $stmt-> fetchAll(PDO::FETCH_ASSOC);

      // Getting data from form
      $rcs_id = htmlspecialchars($_POST["rcs_id"], ENT_QUOTES, 'UTF-8');
      $first_name = htmlspecialchars($_POST["firstName"], ENT_QUOTES, 'UTF-8');
      $last_name = htmlspecialchars($_POST["lastName"], ENT_QUOTES, 'UTF-8');
      $password = htmlspecialchars($_POST["password"], ENT_QUOTES, 'UTF-8');
      $phone_number = htmlspecialchars($_POST["phoneNumber"], ENT_QUOTES, 'UTF-8');
      $major = htmlspecialchars($_POST["major"], ENT_QUOTES, 'UTF-8');
      $graduation_year = htmlspecialchars($_POST["gradYear"], ENT_QUOTES, 'UTF-8');
      $location = htmlspecialchars($_POST["campus"], ENT_QUOTES, 'UTF-8');
      // $profile_picture = $_POST["profile_picture"];
      
      $date_joined = date('Y-m-d');

      // display the data
      echo $rcs_id . "<br>";
      echo $first_name . "<br>";
      echo $last_name . "<br>";
      echo $password . "<br>";
      echo $phone_number . "<br>";
      echo $major . "<br>";
      echo $graduation_year . "<br>";
      echo $location . "<br>";
      // echo $profile_picture . "<br>";
      
      echo $date_joined . "<br>";

      // Connecting to db and adding the form data
      if (!empty($rcs_id) && !empty($first_name) && !empty($last_name) &&!empty($location)  && !empty($password) && !empty($phone_number) && !empty($major) && !empty($graduation_year)&& !empty($date_joined)) {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE rcs_id = :rcs_id");
        $stmt->execute(array(':rcs_id' => $rcs_id));

        // Fetch the result
        $result = $stmt->fetch();

        // If the SELECT query returned any rows, then the RCS ID is already in use
        if ($result) {
            echo "The RCS ID is already in use.";
            header("Location: ../login/index.html?error=User already exists");
        } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO users (rcs_id, first_name, last_name,  user_password, phone_number, major, graduation_year, date_joined, user_location) 
        VALUES (:rcs_id, :first_name, :last_name, :user_password, :phone_number, :major, :graduation_year, :date_joined, :user_location)");
        $stmt->execute(array(
          ':rcs_id' => $rcs_id,
          ':first_name' => $first_name,
          ':last_name' => $last_name,
          ':user_password' => $hashed_password,
          ':phone_number' => $phone_number,
          ':major' => $major,
          ':graduation_year' => $graduation_year,
          ':date_joined' => $date_joined,
          ':user_location' => $location
        ));
          echo "User Created";
          header("Location: ../login"); //Redirect user back to login
          exit();
        }
      }
    }
      else {
        echo "Please provide information to each field";
      } 
  }catch(PDOException $e){
    echo $e->getMessage();
  }


?>