function copyright(){
    const paragraph = `
    <p>
      Copyright &copy; ${new Date().getFullYear()} PENKOV Miroslav. Tous droits réservés.
    </p>
  `;

    document.getElementById('copyright').innerHTML = paragraph;
  }

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function monMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}