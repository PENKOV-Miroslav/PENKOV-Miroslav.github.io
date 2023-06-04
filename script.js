function copyright(){
    const paragraph = `
    <i>
      Copyright &copy; ${new Date().getFullYear()} PENKOV Miroslav. Tous droits réservés.
     <br> <a class="mentionlegal" href= "mentionlegal.pdf">Consulter les mentions légales</a>
    </i>
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
   window.open('https://www.bfmtv.com/tech/intelligence-artificielle/la-cnil-devoile-son-plan-d-action-pour-encadrer-le-developpement-de-l-intelligence-artificielle_AV-202306010412.html', '_blank');
}
function alertJuge1(){
  window.open('https://www.economie.gouv.fr/entreprises/reglement-general-protection-donnees-rgpd', '_blank');
}
function alertJuge2(){
  window.open('https://www.legifrance.gouv.fr/search/cnil?tab_selection=cnil&searchField=ALL&query=&page=1&init=true&timeInterval=', '_blank');
}

function alertTech(){
  window.open('https://cpp.developpez.com/actu/342048/Carbon-va-t-il-remplacer-le-Cplusplus-Le-projet-Carbon-explore-une-direction-future-possible-pour-le-Cplusplus-etant-donne-les-difficultes-a-l-ameliorer-et-mise-sur-l-interoperabilite-comme-base-de-travail/', '_blank');
}
function alertTech1(){
 window.open('https://www.entreprises.gouv.fr/fr/numerique/enjeux/la-strategie-nationale-pour-l-ia', '_blank');
}
function alertTech2(){
 window.open('https://dotnet.developpez.com/actu/338388/-NET-7-est-maintenant-disponible-en-tant-que-plateforme-de-developpement-unifiee-de-Microsoft-et-apporte-des-ameliorations-pour-NET-MAUI-et-le-support-de-NET-pour-ARM64/', '_blank');
}




