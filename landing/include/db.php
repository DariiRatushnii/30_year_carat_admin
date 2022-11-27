<?php
$dsn = "mysql:host=$db_host;dbname=$db_name;port=3306;charset=utf8";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_STRINGIFY_FETCHES => false,
            PDO::ATTR_EMULATE_PREPARES => false,
];

$pdo = new PDO($dsn, $db_user, $db_pass, $options);

?>