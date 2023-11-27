<?php
/*Implementation from https://biplabsinha345.medium.com/php-mysql-search-database-and-display-results-32334fc67af6 */
//DB Credentials
$host = "localhost";
$dbName = "rpm";
$username = 'root';
$password = 'M4k3t14!';

$searchResult = "";

if (isset($_POST["save"])) { //Get repsonse from search bar
  if (!empty($_POST["search"])) {
    $userSearch = $_POST["search"];
    $sqlSearchQuery = $con -> prepare("SELECT * FROM listings WHERE listing_title LIKE '%$userSearch%'"); //Get all listings that have a similar title
    $sqlSearchQuery -> execute();
    $searchResult = $sqlSearchQuery -> fetchAll(PDO::FETCH_ASSOC);
  }
}
else {
  echo "No listings were found!";
}
?>