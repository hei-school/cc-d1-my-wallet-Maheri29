const prompt = require('prompt-sync')();

class Wallet {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Dépôt réussi");
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Retrait réussi");
        } else {
            console.log("Fonds insuffisants");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const monPortefeuille = new Wallet();

while (true) {
    console.log("Menu :");
    console.log("1. Déposer de l'argent");
    console.log("2. Retirer de l'argent");
    console.log("3. Consulter le solde");
    console.log("0. Quitter");

    const choix = prompt("Choisissez une option : ");

    switch (choix) {
        case '1':
            const montantDepot = parseFloat(prompt("Entrez le montant à déposer : "));
            monPortefeuille.deposit(montantDepot);
            break;
        case '2':
            const montantRetrait = parseFloat(prompt("Entrez le montant à retirer : "));
            monPortefeuille.withdraw(montantRetrait);
            break;
        case '3':
            console.log("Solde actuel :", monPortefeuille.getBalance());
            break;
        case '0':
            console.log("Au revoir !");
            process.exit(0);
        default:
            console.log("Option invalide. Veuillez choisir une option valide.");
    }
}
