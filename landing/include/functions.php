<?php
require_once('config.php');

function get_emplyees(){
    global $pdo;
    $stmt = $pdo->prepare('SELECT * FROM `employees` 
                             ORDER BY `employees`.`sort_priority` ASC');
    $stmt->execute();
    $employees = $stmt->fetchAll();
    return  $employees;
}

function get_emplyees_comments($id){    
    global $pdo;

    $stmt = $pdo->prepare('SELECT GROUP_CONCAT(`comment` SEPARATOR "|") as `comments` FROM `comments` WHERE  `employe_id` = :id;');
    $stmt->execute(array('id' => $id));
    $comments = $stmt->fetchColumn();
    return $comments;
}
?>