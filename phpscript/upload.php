<?php
require_once 'connect.php';
$name=$_POST["name"];
$comment=$_POST["comment"];
$save =md5(microtime());
$id=mt_rand();
$image = $_FILES["img"];
print_r ($image);
//move_uploaded_file($image["tmp_name"], '../savedimage/'.$save.'.jpg');
if (move_uploaded_file($image["tmp_name"], '../savedimage/'.$save.'.jpg')) {
$connectionBD->query("INSERT INTO `comments` VALUES ('{$id}','{$name}',' {$comment}','{$save}')");
    exit();
}

