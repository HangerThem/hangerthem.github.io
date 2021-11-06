<?php
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $emailTo = 'hangerthem@seznam.cz';
        $body = "Hi, my name is,".$name."\n\n".$message;

        $headers = "From:".$email_from;

        mail($emailTo,$subject,$email_body,$headers);
        header("Location: contact.html?mailsend");
    }
?>