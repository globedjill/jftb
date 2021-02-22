var bouttonSeCo = document.getElementById('bouttonSeCo');
//creation du boutton password
var divPassword = document.createElement('div');
divPassword.class = 'ligne';
var labelPassword = document.createElement('label');
labelPassword.name = 'mdp';
labelPassword.textContent = 'Mot de Passe';
var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.name = 'mdp';

//recuperation de la valeur du pseudo entrer
var divPseudo = document.getElementById('divPseudo');
var inputPseudo = document.getElementById('inputPseudo');
var labelPseudo = document.getElementById('labelPseudo');
var afficheRecupValue = document.createElement('p');
afficheRecupValue.className = 'mepRecupValue';
var lienModifier = document.createElement('p');
lienModifier.textContent = 'Modifier';
var aModifier = document.createElement('a');
aModifier.href = 'seConnecter.html';

//creation du boutton submit
var bouttonSubmit = document.createElement('button');
bouttonSubmit.id = 'bouttonSubmit';
bouttonSubmit.textContent = 'Se connecter';
bouttonSubmit.setAttribute('onclick','submit');

bouttonSeCo.addEventListener('click', e => {
                       e.preventDefault();
                       SeConnecter();
                       });

bouttonSubmit.addEventListener('click', e => {
                         Interdit();
                         console.log(bouttonSubmit);
                         })

function SeConnecter() {
    var inputPseudoValue = document.getElementById("inputPseudo").value;

    if (inputPseudoValue == "") {
        Interdit();

    } else {
        inputPseudo.style.display = 'none';
        labelPseudo.style.display = 'none';
        bouttonSeCo.style.display = 'none';
        divPseudo.appendChild(afficheRecupValue);
        afficheRecupValue.textContent = inputPseudoValue;
        divPseudo.appendChild(aModifier);
        divPseudo.className = 'ligne';
        aModifier.appendChild(lienModifier);
        divPseudo.after(divPassword);
        divPassword.appendChild(labelPassword);
        divPassword.appendChild(inputPassword);
        divPassword.after(bouttonSubmit);
    }

}

function Interdit() {
    inputPseudo.setAttribute("required", "");
}
