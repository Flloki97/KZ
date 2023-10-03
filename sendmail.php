<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

// Configuration
$toEmail = 'fbryma7@gmail.com'; // Your Gmail address
$fromEmail = $_POST['email'];
$fromName = $_POST['name'];

// Initialize PHPMailer
$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls'; // Use 'tls' or 'ssl' if needed
$mail->Host = 'smtp.gmail.com'; // Gmail SMTP server
$mail->Port = 587; // Gmail SMTP port
$mail->Username = 'fbryma7@gmail.com'; // Your Gmail address
$mail->Password = 'Leli363681..'; // Your Gmail password

// Email content
$mail->setFrom($fromEmail, $fromName);
$mail->addAddress($toEmail);
$mail->Subject = 'New Contact Form Submission';
$mail->isHTML(true);
$mail->Body = $_POST['message'];

// Attach file if provided
if ($_FILES['attachment']['size'] > 0) {
    $mail->addAttachment($_FILES['attachment']['tmp_name'], $_FILES['attachment']['name']);
}

// Send the email
if ($mail->send()) {
    echo 'Message has been sent!';
} else {
    echo 'Error: ' . $mail->ErrorInfo;
}
?>
