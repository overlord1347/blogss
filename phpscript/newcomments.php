<?php
require_once "connect.php";


$sql='SELECT * FROM `comments` ORDER BY `commentDate` DESC ';
$result= $connectionBD->query($sql);
$onshow=[];
if ($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        $onshow[]=$row;
    }
    print_r(json_encode($onshow));
}