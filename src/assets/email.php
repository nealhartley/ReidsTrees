<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_email = $request->email;
	$message = $request->message;
	$from_name = $request->name;
	$from_phone = $request->phone;

	$to_email = $from_email;

	$contact = "\n\n Name: " . $from_name . "\n".
						"Email: " . $from_email . "\n" .
						"Phone: " .$from_phone . "\n";
	$content = $message;

	$website = 'Angular Php Email Example';
	$email_subject = "Reids Trees Contact Form";

	$email_body = '';
	$email_body .= "contact: ".  $contact . "\n content: " . "\n" . $content;

/*
  $headers = "";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";
*/
	$delivery_status = mail('reidstrees@gmail.com', $email_subject, $email_body);

	$response_array['status'] = 'success internal - external: ' . $delivery_status;
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
