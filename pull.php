<?php
if ($_POST['payload']) {
$shell_response = `sh /var/www/spudWeb/git_pull.sh`;
echo "$shell_response";
}
?>
