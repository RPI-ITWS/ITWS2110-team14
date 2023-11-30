<?php
  //error handling
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  //start session
  session_start();

  //connect to database
  include_once("../../../database/connect.php");

  //get username and password from form
  if(isset($_POST["save"])){
    $username = $_POST['rcs_id'];
    $password = $_POST['password'];

    echo $username . "<br>";
    echo $password . "<br>";

    //query database for username using pdo then check hashed password
    // if password is correct, set session variables and redirect to home page
    // if password is incorrect, redirect to login page with error message
    // if username is not found, redirect to login page with error message
    $stmt = $pdo->prepare("SELECT * FROM users WHERE rcs_id = :rcs_id");
    $stmt->execute(['rcs_id' => $username]);
    $user = $stmt->fetch();
    // print hashed password from database
    echo $user['user_password'] . "<br>";

    //check if username exists
    if($user){
      //check if password is correct
      if(password_verify($password, $user['user_password'])){
        //set session variables
        $_SESSION['rcs_id'] = $user['rcs_id'];
        $_SESSION['first_name'] = $user['first_name'];
        $_SESSION['last_name'] = $user['last_name'];
        $_SESSION['phone_number'] = $user['phone_number'];
        $_SESSION['major'] = $user['major'];
        $_SESSION['graduation_year'] = $user['graduation_year'];
        $_SESSION['date_joined'] = $user['date_joined'];
        $_SESSION['user_location'] = $user['user_location'];
        $_SESSION['loggedin'] = true;
        // $_SESSION['user_type'] = $user['user_type'];
        // $_SESSION['profile_picture'] = $user['profile_picture'];

        //redirect to home page
        header("Location: ../../marketplace/");
        
      } else {
        //redirect to login page with error message
        header("Location: index.html?error=Incorrect Password");
        exit();
      }
    }else{
      //redirect to login page with error message
      header("Location: index.html?error=User does not exist");
      exit();
    }

  }


?>