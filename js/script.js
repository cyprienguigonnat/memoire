// 6) Changer de thème Jour/Nuit
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

// 5) Affiche le pourcentage de scroll
 const setProgress = () => {
   const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   const scrollProgress = Math.floor((winScroll / height) * 100);
   document.getElementById("progress").textContent = `${scrollProgress}%`;
 }

// 4) Colorer les chips du sommaire en fonction d'où on est dans la page
 function checkVisible(elm) {
   var rect = elm.getBoundingClientRect();
   var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
   return !(rect.bottom < 0 || rect.top - viewHeight >= -5);
 }

 var myDiv = document.getElementById('ch_1');
 if(checkVisible(myDiv)) {
 // si ma div avec l'id myDiv est visible, donc ...
// oDomElement.style.color = "rgba(46, 197, 204, 1)";
 } else {
 // si elle n'est pas visible, ...
// oDomElement.style.color = "rgba(255, 255, 255, 1)";
 }


// 2) Regroupe et exécute les différentes fonctions
const init = () => {
  window.onscroll = () => setProgress();
  switchTheme();
}

// 1) Après le chargement de la page, exécute la fonction init()
document.onload = init();