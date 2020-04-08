<?php
// Use in the “Post-Receive URLs” section of your GitHub repo.
shell_exec( 'touch itsworking' );
if ( $_POST['payload'] ) {
shell_exec( ‘cd /var/www/html/ && git reset –hard HEAD && git pull && touch itsworking’);
}

?>hi
