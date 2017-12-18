<?php
  echo "Hello we are inside send function";
	$delivery_status = mail('neal.w.hartley@gmail.com','test mail','test body');
  echo $delivery_status;
?>
