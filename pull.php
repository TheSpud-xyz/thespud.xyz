<?php
echo "Test push 3";
if ($_POST['payload']) {
shell_exec('cd /var/www/html/ && git reset --hard HEAD && git pull');
}
?>
