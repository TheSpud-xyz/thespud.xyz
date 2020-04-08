<?php
if ($_POST['payload']) {
$shell_response = shell_exec('./git_pull.sh');
echo "$shell_response";
}
?>
