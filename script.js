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

function alertJuge(){
   window.open('http://www.google.com', '_blank');
}
function alertJuge1(){
  window.open('http://www.google.com', '_blank');
}
function alertJuge2(){
  window.open('https://www.legifrance.gouv.fr', '_blank');
}

function alertTech(){
  window.open('http://www.google.com', '_blank');
}
function alertTech1(){
 window.open('http://www.google.com', '_blank');
}
function alertTech2(){
 window.open('https://www.legifrance.gouv.fr', '_blank');
}
