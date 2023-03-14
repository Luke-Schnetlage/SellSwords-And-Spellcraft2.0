<?php
require_once('database.php');
$hostID = filter_input(INPUT_GET, 'playerID');
$guestID = filter_input(INPUT_GET, 'gameID');

$query = "INSERT INTO game (start_playerid,join_playerid) VALUES (:hostID,:guestID)";
$statement = $db->prepare($query);
$statement->bindValue(':hostID', "%".$hostID."%", PDO::PARAM_STR);
$statement->bindValue(':guestID', "%".$guestID."%", PDO::PARAM_STR);
$statement->execute();
$game = $statement->fetch();
echo (json_encode($playerBoard));
?>