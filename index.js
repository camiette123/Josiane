//DOM
const touche = [...document.querySelectorAll(".button")]
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydom", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calcuer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexof(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerhtml;  
        }  
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})



