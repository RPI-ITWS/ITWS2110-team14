<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  // check login
  include_once("../../database/connect.php");
  include_once("../../database/check_login.php");

  if(isset($_SESSION["rcs_id"])) {
    $rcs_id = $_SESSION["rcs_id"];
    $selectData = $pdo->prepare("SELECT * FROM RPM_users WHERE rcs_id = :rcs_id");
    $selectData->bindParam(':rcs_id', $rcs_id);
    $selectData->execute();
    $data = $selectData->fetch(PDO::FETCH_ASSOC);
    $json = json_encode($data);
    echo $json;
  } else {
    echo "Error: Not logged in";
  }
?>