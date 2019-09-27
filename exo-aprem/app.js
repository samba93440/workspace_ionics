'use strict';
const nomSerie = document.querySelector("#input-serie");
const noteSerie = document.querySelector("#input-note");
const liste_series = document.querySelector("#listeSeries");
const noteFinale = document.querySelector("#total_series");
const alertCtrl = document.querySelector('ion-alert-controller')
//let totalNote = 0;

const btnConfirm = document.querySelector("#btn-confirm");

btnConfirm.addEventListener('click', () => {
    const recupSerie = nomSerie.value;
    const recupNote = noteSerie.value;

    if(recupSerie.trim().length <= 0 || recupNote <= 0 || recupNote.trim().length <= 0){
        alertCtrl.create({
            message:'veuillez entrer des données correctes !',
            header: 'valeur incorrecte',
            buttons: ["j'ai compris"]
        }).then(alertElement => {
            alertElement.present();
        });
        return

    }


    const newItem = document.createElement('ion-item');
 
    newItem.innerHTML = `<strong> ${recupSerie}: </strong>&nbsp;${recupNote}/10`;

    liste_series.appendChild(newItem);

    nomSerie.value='';
    noteSerie.value = '';
});



