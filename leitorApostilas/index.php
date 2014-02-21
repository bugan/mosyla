<?php 
    //recebe a variavel com o caminho relativo da apostila para envia-lo para o JS
    $_source = "'../assets/apostilas/".$_GET['apostila']."/'";

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=0.95" />
<!-- <link rel="stylesheet/less" type="text/css" href="../assets/css/default.less" /> -->
<link rel="stylesheet" href="../assets/css/default.css" />
<link rel="stylesheet" href="../assets/css/page.css" />
<link rel="stylesheet" href="../assets/css/sidebar.css" />
<link rel="stylesheet" href="../assets/css/button.css" />
<link rel="stylesheet" href="../assets/css/elements.css" />
<!-- <script src="../assets/js/less.js" type="text/javascript"></script> -->
<script type="text/javascript" src="../assets/js/Apostila.js"></script>
<script type="text/javascript" src="../assets/js/SideBar.js"></script>
<script type="text/javascript" src="../assets/js/Button.js"></script>
<script type="text/javascript" src="../assets/js/main.js"></script>

</head>
<head></head>
<body onload="start(<?php echo $_source; ?>);init()">

</body>
</html>