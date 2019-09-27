const design = document.querySelector("#input-design");
const montant = document.querySelector("#input-montant");
const liste_achats = document.querySelector("#listeAchats");
const montantTotal = document.querySelector("#total_achats");
let totalAchat = 0;

const boutonConfirmer = document.querySelector("#btn-confirm");
const boutonCancel = document.querySelector("#btn-cancel");
const alertCtrl = document.querySelector("ion-alert-controller");


boutonConfirmer.addEventListener('click', () => {
    const designation_recup = design.value;
    const montant_recup = montant.value;

    if(designation_recup.trim().length <= 0 || montant_recup <=0 || montant_recup.trim().length <=0){
        alertCtrl.create({
            message:'veuillez entrer des données correctes !',
            header: 'valeur incorrecte',
            buttons: ["j'ai compris"]
        }).then(alertElement => {
            alertElement.present();
        });
        return
        
    }
    
    // Ajouter un item à la liste
    const newItem = document.createElement('ion-item');
 
    newItem.textContent = designation_recup +': €' + montant_recup;

    liste_achats.appendChild(newItem);

    totalAchat += +montant_recup;
    montantTotal.textContent = totalAchat;
})

const clear = () => {
    design.value='';
    montant.value = '';
}
boutonCancel.addEventListener('click', clear);
