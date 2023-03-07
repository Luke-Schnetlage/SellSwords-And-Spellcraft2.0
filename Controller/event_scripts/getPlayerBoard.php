<?php
require_once('database.php');
$playerID = filter_input(INPUT_GET, 'playerID');
	
$query = "SELECT * FROM player_board WHERE player_boardid LIKE :playerID";
	
$statement = $db->prepare($query);
$statement->bindValue(':playerID', "%".$playerID."%", PDO::PARAM_STR);
$statement->execute();
$playerBoard = $statement->fetch();


echo ("") ;

?>