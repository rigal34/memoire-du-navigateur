const name = () => {
  let sayHello = document.getElementById('sayHello');
  let nameStorage = localStorage.getItem('nom');
//nameStorage va chercher dans notreb navigateur qui est le localStorage avec getItem va chercher le nom

//si il trouve rien à nom aucune inscription on prévois un message


  if (nameStorage == null){
    sayHello.innerHTML = "Bonjour à toi l'inconnu, merci de renseigner ton pseudo";

    //et si j'ai quelque chose qui est stocké on ira chercher la variable ou est stocker le nom nameStorage
  } else {
    sayHello.innerHTML = `Bonjour ${nameStorage}`;
  }
};
//compteur de vue
const visit = () => {
  let visitDisplay = document.getElementById('visitDisplay');
  let visitCount = localStorage.getItem('visites');

  visitCount++;
  localStorage.setItem('visites', visitCount);
  visitDisplay.innerHTML = `Nombre de visites : ${visitCount}`;
};
//quand on cliquera sur mon boutton data je récupérai la valeur de mon pseudo
//le setItem va donner notre nom dans notre base de donnée


function setData(){

  let pseudo = document.getElementById('pseudo').value;
  localStorage.setItem('nom', pseudo);
};

name();
visit();

document.cookie = "pseudo=Juju";