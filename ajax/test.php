<?php
$act1 = $_POST['Select1'];
$act2 = $_POST['Select2'];
if ($act1 == 1) {
  echo "В списке 1 выбрана первая опция \n";
} else {
  echo "В списке 1 выбрана вторая опция \n";
  switch ($act2) {
    case '1': echo "В списке 2 выбрана первая опция"; break;
    case '2': echo "В списке 2 выбрана вторая опция"; break;
  }
}
?>