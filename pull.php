<?php
if ($_POST['payload']) {
$shell_response = `sh /var/www/html/git_pull.sh`;
echo "$shell_response";
}
?>
