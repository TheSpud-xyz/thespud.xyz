<?php
if ($_POST['payload']) {
$shell_response = shell_exec('/var/www/html/git_pull.sh');
echo "$shell_response";
}
?>
