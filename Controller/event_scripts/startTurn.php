<?php
require_once('database.php');   
$activePlayer = filter_input(INPUT_GET, 'activePlayerID');
$gameID = filter_input(INPUT_GET, 'gameID');
	
$query = "SELECT * FROM player_board WHERE player_boardid LIKE :playerID AND gameid LIKE :gameID";
$statement = $db->prepare($query);
$statement->bindValue(':playerID', "%".$playerID."%", PDO::PARAM_STR);
$statement->bindValue(':gameID', "%".$gameID."%", PDO::PARAM_STR);
$statement->execute();
$playerBoard = $statement->fetch();


//Add code to check for special beginning of turn effects


echo (json_encode($playerBoard));
?>