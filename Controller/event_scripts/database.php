<?php
$dsn = 'mysql:host=localhost;dbname=ntoweryo_sellswords_and_spellcrafts';
$username = 'ntoweryo_luke_s';
$password = 'lukeluke';

try {
	$db = new PDO($dsn, $username, $password);
    //echo "Successful in connecting to database<br>\n";
} catch (PDOException $e) {
	$error_message = $e->getMessage();
	//echo $error_message;
	echo("ERROR, DB CONNECT FAILED");
	exit();
}
?>
