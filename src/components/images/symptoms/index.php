<?php
$dir    = '/';
$files1 = scandir(__DIR__);
//$files2 = scandir($dir, 1);
//echo "<pre>";
//print_r($files1);
//print_r($files2);
foreach ($files1 as $key => $value) {
    echo '<div>
    <img src="images/symptoms/'.$value.'">
  </div>';
}
?>
