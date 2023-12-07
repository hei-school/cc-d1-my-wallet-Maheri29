class Portefeuille:
    def __init__(self):
        self.solde = 0

    def deposer(self, montant):
        self.solde += montant
        print("Dépôt réussi")

    def retirer(self, montant):
        if montant <= self.solde:
            self.solde -= montant
            print("Retrait réussi")
        else:
            print("Fonds insuffisants")

    def consulter_solde(self):
        return self.solde

    def transfert(self, montant, portefeuille_cible):
        if montant <= self.solde:
            self.solde -= montant
            portefeuille_cible.deposer(montant)
            print("Transfert réussi")
        else:
            print("Fonds insuffisants pour effectuer le transfert")


# Exemple d'utilisation :
mon_portefeuille1 = Portefeuille()
mon_portefeuille2 = Portefeuille()

while True:
    print("Menu :")
    print("1. Déposer de l'argent")
    print("2. Retirer de l'argent")
    print("3. Consulter le solde")
    print("4. Transférer de l'argent")
    print("0. Quitter")

    choix = input("Choisissez une option : ")

    if choix == '1':
        montant_depot = float(input("Entrez le montant à déposer : "))
        mon_portefeuille1.deposer(montant_depot)
    elif choix == '2':
        montant_retrait = float(input("Entrez le montant à retirer : "))
        mon_portefeuille1.retirer(montant_retrait)
    elif choix == '3':
        print("Solde actuel :", mon_portefeuille1.consulter_solde())
    elif choix == '4':
        montant_transfert = float(input("Entrez le montant à transférer : "))
        mon_portefeuille1.transfert(montant_transfert, mon_portefeuille2)
    elif choix == '0':
        print("Au revoir !")
        break
    else:
        print("Option invalide. Veuillez choisir une option valide.")
