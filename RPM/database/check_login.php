<?php

  if (session_status() == PHP_SESSION_NONE) {
    session_start();
  }
  
  if(isset($_SESSION["rcs_id"])) {
    header("Location: /RPM/pages/user/login");
  }

?>