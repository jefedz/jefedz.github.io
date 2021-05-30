<?php

if (isset($_POST['submitted'])) {
    $firstName = $_POST["firstName"];
    $lastName = $_POST['lastName'];
    $mail = $_POST['mail'];
    $message = $_POST["message"];

    echo $firstName, $lastName;
}

?>