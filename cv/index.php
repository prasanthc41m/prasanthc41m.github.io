<!-- <meta http-equiv="refresh" content="0; url=https://prasanthk.com/cv/Prasanth-K-CV-2023.pdf" />
-->

<!DOCTYPE html>
<html>
<head>
  <title>Resume/CV</title>
</head>
<body>

  <h1>Resume/CV</h1>

  <ul>
    <?php
      $files = scandir(".");
      foreach ($files as $file) {
        echo "<li><a href='$file'>$file</a></li>";
      }
    ?>
  </ul>

</body>
</html>
