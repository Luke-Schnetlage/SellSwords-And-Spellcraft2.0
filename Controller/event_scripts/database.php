<?php
$dsn = 'mysql:host=;dbname=';
$username = '';
$password = '';

try {
	$db = new PDO($dsn, $username, $password);
    //echo "Successful in connecting to database<br>\n";
} catch (PDOException $e) {
	$error_message = $e->getMessage();
	//echo $error_message;
	include('databaseError.php');
	exit();
}
?>