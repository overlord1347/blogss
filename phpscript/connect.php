<?php
define("HOSTS","127.0.0.1");
define("DB_USER","root");
define("DB_PASS","root");
define("DB","blogss");
$connectionBD=mysqli_connect(HOSTS,DB_USER,DB_PASS,DB);
if ($connectionBD==false){
    echo "не удалось подключиться\n";
    echo mysqli_connect_error();
}
