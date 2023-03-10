<?php
require_once('database.php');
$playerID = filter_input(INPUT_GET, 'playerID');
$gameID = filter_input(INPUT_GET, 'gameID');
	
$query = "SELECT * FROM player_board WHERE player_boardid LIKE :playerID AND gameid LIKE :gameID";
	
$statement = $db->prepare($query);
$statement->bindValue(':playerID', "%".$playerID."%", PDO::PARAM_STR);
$statement->bindValue(':gameID', "%".$gameID."%", PDO::PARAM_STR);
$statement->execute();
$playerBoard = $statement->fetch();
echo (json_encode($playerBoard));
?>