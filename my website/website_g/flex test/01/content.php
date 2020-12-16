
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="share.css">
  <link rel="stylesheet" href="content.css">
</head>
<body>
    <div class="content">
  <div class="flex">
  <ul class="nav__container">
  <li class="nav_item"><a href="content.php?name=content">text</a></li>
  <li class="nav_item"><a href="content.php?name=tools">text</a></li>
  <li class="nav_item test">text
    <ul>

    <li class="nav_item sub">text</li>
    <li class="nav_item sub">text</li>
    <li class="nav_item sub">text</li>

    </ul>
  </li>
</ul>
  </div>
  <div class="pos">
  <div class="home_btn" ><a  href="i.php">home</a></div>
  </div>

    <div class="text">
      <?php

if(!empty($_GET["name"])){
     $dir = "inc";
     $folder=scandir($dir,0);
     unset($folder[0] , $folder[1]);
 $name = $_GET["name"];
 if(in_array($name . "_in.php" , $folder)){
   include($dir . "/" . $name . "_in.php");
 }else {
   echo "<h1>sorry page not found</h1>";
 }

 }

?>
    </div>
</div>




</body>
</html>
