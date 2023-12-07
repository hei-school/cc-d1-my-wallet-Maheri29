import java.util.Scanner;

public class Wallet {
    private double balance;

    public Wallet() {
        this.balance = 0;
    }

    public void deposit(double amount) {
        this.balance += amount;
        System.out.println("Dépôt réussi");
    }

    public void withdraw(double amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            System.out.println("Retrait réussi");
        } else {
            System.out.println("Fonds insuffisants");
        }
    }

    public double getBalance() {
        return this.balance;
    }

    public void transfer(double amount, Wallet targetWallet) {
        if (amount <= this.balance) {
            this.balance -= amount;
            targetWallet.deposit(amount);
            System.out.println("Transfert réussi");
        } else {
            System.out.println("Fonds insuffisants pour effectuer le transfert");
        }
    }

    public static void main(String[] args) {
        Wallet myWallet1 = new Wallet();
        Wallet myWallet2 = new Wallet();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Menu :");
            System.out.println("1. Déposer de l'argent");
            System.out.println("2. Retirer de l'argent");
            System.out.println("3. Consulter le solde");
            System.out.println("4. Transférer de l'argent");
            System.out.println("0. Quitter");

            System.out.print("Choisissez une option : ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Entrez le montant à déposer : ");
                    double depositAmount = scanner.nextDouble();
                    myWallet1.deposit(depositAmount);
                    break;
                case 2:
                    System.out.print("Entrez le montant à retirer : ");
                    double withdrawAmount = scanner.nextDouble();
                    myWallet1.withdraw(withdrawAmount);
                    break;
                case 3:
                    System.out.println("Solde actuel : " + myWallet1.getBalance());
                    break;
                case 4:
                    System.out.print("Entrez le montant à transférer : ");
                    double transferAmount = scanner.nextDouble();
                    myWallet1.transfer(transferAmount, myWallet2);
                    break;
                case 0:
                    System.out.println("Au revoir !");
                    System.exit(0);
                default:
                    System.out.println("Option invalide. Veuillez choisir une option valide.");
            }
        }
    }
}
