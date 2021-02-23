var recupBouttonCreation = document.getElementById('bouttonCreation');
var pErreur = document.getElementById('pErreur');
var pErreurMdp = document.getElementById('pErreurMdp');
var recupMdp = document.getElementById('inputPassword');
var recupMdpConfirm = document.getElementById('inputPasswordConfirm');


var recupForm = document.getElementById('creationCompte');
var recupDiv = recupForm.querySelectorAll('div');

//fonction click button
recupBouttonCreation.addEventListener('click', e => {
    var recupLabel = document.querySelectorAll('input');
    for (var i = 0; i < recupLabel.length; i++) {
        if (recupLabel[i].value == "") {
            recupLabel[i].setAttribute("required", "");
        } else {
            (recupLabel)[i].required = false;
        }
    }
    VerifMdp();
    StockageLocal();
});
ReinjectionDesElements();

//stockage dans le local storage
function StockageLocal() {
    for (var i = 0; i < recupDiv.length; i++) {
        var a = recupDiv[i].querySelector('label').textContent;
        var b = recupDiv[i].querySelector('input').value;
        sessionStorage.setItem(a, b);
    }
    sessionStorage.clear();
}

//reinjection des elements dans la page si erreur
function ReinjectionDesElements() {
        for (var i = 0; i < sessionStorage.length; i++) {
            recupDiv[i].querySelector('input').value = sessionStorage.getItem([i]);
        }
    }

//verification du mot de passe
function VerifMdp() {
    if (recupMdp.value.length < 6) {
        pErreur.style.animation = "headshake 100ms cubic-bezier(.4,.1,.6,.9) 3";
        pErreur.textContent = "Le mot de passe doit contenir au moins 6 caractéres";
        pErreur.style.color = 'red';
    } else {
        pErreur.style.animation = "none";
        pErreur.textContent = '';
    }
    if (recupMdp.value == recupMdpConfirm.value && recupMdp.value.length >= 6) {
        for (var i = 0; i < recupDiv[i].length; i++) {
            recupDiv[i].querySelector('input').value = "";
        }
    }
    if (recupMdp.value != recupMdpConfirm.value) {
        pErreurMdp.style.animation = "headshake 100ms cubic-bezier(.4,.1,.6,.9) 3";
        pErreurMdp.style.color = 'red';
        pErreurMdp.textContent = "Les saisie ne correspondent pas";
    } else {
        pErreurMdp.style.animation = "none";
        pErreurMdp.textContent = "";
    }
}
   
   
