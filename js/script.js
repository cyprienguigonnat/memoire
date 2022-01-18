// 5) Changer de thème Jour/Nuit
const switchTheme= () => {
  const btn = document.getElementById("themeSwitch");
  const btnLabel = btn.nextElementSibling;
  btn.addEventListener('click', () => {
    if (document.body.classList.contains('th-light')) {
      document.body.classList.remove("th-light");
      btnLabel.textContent = "Nuit";
    } else {
      document.body.classList.add("th-light");
      btnLabel.textContent = "Jour";
    }
  });
};

// 4) Affiche le pourcentage de scroll
const setProgress = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = Math.floor((winScroll / height) * 100);
  document.getElementById("progress").textContent = `${scrollProgress}%`;
}

// 3) Colorer les chips du sommaire en fonction d'où on est dans la page
window.onscroll = function() {
  setProgress();
  
  var menuItems = document.querySelectorAll('.contents a');

  menuItems.forEach(function(menuItem) {
    console.log(menuItem.getAttribute('data-id'));

    let anchorId = menuItem.getAttribute('data-id');
    let anchor = document.getElementById(anchorId);

    if (anchor) {

      if(anchor.offsetTop - window.scrollY <= 256) {
        menuItems.forEach(function(_menuItem) {
          _menuItem.classList.remove('current');
        });

        menuItem.classList.add('current');
      }
    }
  })
}

// 2) Regroupe et exécute les différentes fonctions
const init = () => {
  switchTheme();
}

// 1) Après le chargement de la page, exécute la fonction init()
document.onload = init();