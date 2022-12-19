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


// Ouvrir et fermer la barre latérale
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}