<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="menu.js"></script>
    <title>Portfolio Miroslav Penkov</title>
</head>
<body>
    

<div class="topnav" id="monMenu">
  <a href="#Acceuil" class="active fa fa-home"></a>
  <a href="#A propos">A propos de moi</a>
  <a href="#Competences">Mes Competences</a>
  <a href="#A propos de mes projets ">Projets réaliser</a>
  <a href="#contacter moi">Contactez moi</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div class  = "header xxxlarge">
    Bienvenu sur le portfolio de MIROSLAV PENKOV
</div>
<br>
<div class="container">
<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="wiclic.php">
      <img src="image/logo-wiclic.png" alt="Wiclic" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src="img_forest.jpg" alt="Forest" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="clearfix"></div>
</div>

<br>
<div class="container"> 
        <h1>Contact Me</h1>
        <p>Feel free to contact us and we will get back to you ass sson as we can.</p>
        <form action="envoyerMessage.php" method="POST">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email">
            <label for="subject">Subject:</label>
            <input type="text" name="subject" id="subject">
            <label for="message">Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send">
        </form>
    </div>



</body>
</html>