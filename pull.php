<?php
if ($_POST['payload'].secret === "acersucks") {
echo $_POST['payload'].secret;
$shell_response = `sh /var/www/html/git_pull.sh`;
echo "$shell_response";
}
?>
