/** Partie 3 - programmation orientée objet */
function Personne(nom, prenom, pseudo) {
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function () {
        return this.prenom + ' ' + this.nom + ' [' + this.pseudo + ']'
    }
    this.afficherPersonne = function () {
        console.log(this.nom, this.prenom, this.pseudo, this.getNomComplet())
    }
}

jules = new Personne('LEMAIRE', 'Jules', 'jules77')
paul = new Personne('LEMAIRE', 'Paul', 'paul44')

jules.afficherPersonne()
paul.afficherPersonne()

jules.pseudo = 'jules44'

console.log(jules.getNomComplet())

console.log(jules.age)

Personne.prototype.age = 'NON RENSEIGNE'

console.log(jules.age)

jules.age = 30

console.log(jules.age)

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0)
}

console.log(jules.getInitiales())

robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.prenom + ' ' + this.nom + ' [' + this.pseudo + ']'
    },
    afficher: function () {
        console.log(this.nom, this.prenom, this.pseudo, this.getNomComplet())
    }
}

robert.afficher()

function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.getInfos = function () {
        return this.prenom + ' ' + this.nom + ' [' + this.numeroClient + ']'
    }
    this.numeroClient = numeroClient
    this.afficherClient = function () {
        console.log(this.nom, this.prenom, this.pseudo, this.getNomComplet(), this.numeroClient)
    }
}

steve = new Client('LUCAS', 'Steve', 'steve44', 'A01')
steve.afficherClient()

console.log(steve.getInfos())