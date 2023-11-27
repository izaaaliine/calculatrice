let valeurInitiale = '';
let ecran = document.querySelector('.ecran');

function ajouter(valeur) {
  if (valeurInitiale === '0') {
    valeurInitiale = valeur;
  } else {
    valeurInitiale += valeur;
  }
  ecran.textContent = valeurInitiale;
}

function effacer() {
  valeurInitiale = '';
  ecran.textContent = '';
}
function calcul() {
  try {
    const resultat = eval(valeurInitiale);
    ecran.textContent = resultat;
  } catch (erreur) {
    console.error('Erreur de calcul:', erreur);
    ecran.textContent = 'Erreur';
  }
}
