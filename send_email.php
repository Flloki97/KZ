<!-- <?php 

// $name = $_POST["name"];
// $email = $_POST["email"];
// $subject = $_POST["subject"];
// $message = $_POST["message"];

// require "vendor/autoload.php";

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;

// $mail = new PHPMailer(true);


// $mail->isSMTP();
// $mail->SMTPAuth = true;

// $mail->Host = "smtp.gmail.com";
// $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
// $mail->Port = 587;

// $mail->Username = "you@example.com";
// $mail->Password = "password";

// $mail->setFrom($email, $name);
// $mail->addAddress("fbryma7@gmail.com", "Leli");

// $mail->Subject = $subject;
// $mail->Body = $message;

// $mail->send();

//header("Location: sent.html");


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please fill out all required fields and enter a valid email address.";
        exit;
    }

    $recipient = "youremail@example.com";
    $subject = "New Contact Form Submission";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
      echo "Oops! Something went wrong and we couldn't send your message.";
}
} else {
http_response_code(403);
echo "There was a problem with your submission, please try again.";
}
       
