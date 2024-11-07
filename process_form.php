<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $solution_type = $_POST['solution-type'];
    $price_range = isset($_POST['price-range']) ? $_POST['price-range'] : 'Not specified'; // Handle price range if provided
    $message = $_POST['message'];

    // Construct the email
    $to = "ofomimatthew7@gmail.com"; // Replace with your email address
    $email_subject = "New Contact Form Submission: $subject";
    $email_body = "Name: $name\nEmail: $email\nSubject: $subject\nSolution Type: $solution_type\nPrice Range: $price_range\nMessage: $message";

    // Email headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Email successfully sent!";
    } else {
        echo "Email sending failed.";
    }
}
?>
