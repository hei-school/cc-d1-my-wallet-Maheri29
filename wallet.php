<?php

class Wallet {
    private $balance;

    public function __construct() {
        $this->balance = 0;
    }

    public function deposit($amount) {
        $this->balance += $amount;
        echo "Dépôt réussi\n";
    }

    public function withdraw($amount) {
        if ($amount <= $this->balance) {
            $this->balance -= $amount;
            echo "Retrait réussi\n";
        } else {
            echo "Fonds insuffisants\n";
        }
    }

    public function getBalance() {
        return $this->balance;
    }

    public function transfer($amount, Wallet $targetWallet) {
        if ($amount <= $this->balance) {
            $this->balance -= $amount;
            $targetWallet->deposit($amount);
            echo "Transfert réussi\n";
        } else {
            echo "Fonds insuffisants pour effectuer le transfert\n";
        }
    }
}

$myWallet1 = new Wallet();
$myWallet2 = new Wallet();

while (true) {
    echo "Menu :\n";
    echo "1. Déposer de l'argent\n";
    echo "2. Retirer de l'argent\n";
    echo "3. Consulter le solde\n";
    echo "4. Transférer de l'argent\n";
    echo "0. Quitter\n";

    $choice = readline("Choisissez une option : ");

    switch ($choice) {
        case '1':
            $depositAmount = readline("Entrez le montant à déposer : ");
            $myWallet1->deposit((float)$depositAmount);
            break;
        case '2':
            $withdrawAmount = readline("Entrez le montant à retirer : ");
            $myWallet1->withdraw((float)$withdrawAmount);
            break;
        case '3':
            echo "Solde actuel : " . $myWallet1->getBalance() . "\n";
            break;
        case '4':
            $transferAmount = readline("Entrez le montant à transférer : ");
            $myWallet1->transfer((float)$transferAmount, $myWallet2);
            break;
        case '0':
            echo "Au revoir !\n";
            exit(0);
        default:
            echo "Option invalide. Veuillez choisir une option valide.\n";
    }
}
