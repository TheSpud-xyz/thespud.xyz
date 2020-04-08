<?php
if ($_POST['payload']) {
$shell_response = `/var/www/html/git_pull.sh`;
echo "$shell_response";
}
?>
