<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  // check login
  include_once("../../../database/connect.php");
  include_once("../../../database/check_login.php");

  if(isset($_SESSION["rcs_id"])) {
    $rcs_id = $_SESSION["rcs_id"];
    $selectData = $pdo->prepare("SELECT * FROM users WHERE rcs_id = :rcs_id");
    $selectData->bindParam(':rcs_id', $rcs_id);
    $selectData->execute();
    $data = $selectData->fetch(PDO::FETCH_ASSOC);

    $getData = $pdo->prepare("SELECT * FROM listings WHERE rcs_id = :rcs_id AND active = 1");
    $getData->bindParam(':rcs_id', $rcs_id);
    $getData->execute();
    $listings = $getData->fetchAll(PDO::FETCH_ASSOC);
    $totalListings = count($listings);

    $data['totalListings'] = $totalListings;

    $json = json_encode($data);
    echo $json;
  } else {
    echo "Error: Not logged in";
  }
?>