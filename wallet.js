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

    transfer(amount, targetWallet) {
        if (amount <= this.balance) {
            this.balance -= amount;
            targetWallet.deposit(amount);
            console.log("Transfert réussi");
        } else {
            console.log("Fonds insuffisants pour effectuer le transfert");
        }
    }
}

const monPortefeuille1 = new Wallet();
const monPortefeuille2 = new Wallet();

while (true) {
    console.log("Menu :");
    console.log("1. Déposer de l'argent");
    console.log("2. Retirer de l'argent");
    console.log("3. Consulter le solde");
    console.log("4. Transférer de l'argent");
    console.log("0. Quitter");

    const choix = prompt("Choisissez une option : ");

    switch (choix) {
        case '1':
            const montantDepot = parseFloat(prompt("Entrez le montant à déposer : "));
            monPortefeuille1.deposit(montantDepot);
            break;
        case '2':
            const montantRetrait = parseFloat(prompt("Entrez le montant à retirer : "));
            monPortefeuille1.withdraw(montantRetrait);
            break;
        case '3':
            console.log("Solde actuel :", monPortefeuille1.getBalance());
            break;
        case '4':
            const montantTransfert = parseFloat(prompt("Entrez le montant à transférer : "));
            monPortefeuille1.transfer(montantTransfert, monPortefeuille2);
            break;
        case '0':
            console.log("Au revoir !");
            process.exit(0);
        default:
            console.log("Option invalide. Veuillez choisir une option valide.");
    }
}
