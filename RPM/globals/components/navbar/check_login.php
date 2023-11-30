<?php
  session_start();
  
  header('Content-Type: application/json');
  if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
      echo json_encode(['loggedin' => true, 'rcs_id' => $_SESSION['rcs_id']]);
  } else {
      echo json_encode(['loggedin' => false]);
  }
?>