<?php
include_once("CAS-1.6.1/CAS.php");
phpCAS::client(CAS_VERSION_2_0, 'cas-auth.rpi.edu', 443, '/cas/');
// SSL!
phpCAS::setCasServerCACert("cacert.pem");

if (phpCAS::isAuthenticated()) {
  phpCAS::logout();
} else {
  header('location: ../../index.html');
}
?>
