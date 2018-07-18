/** Partie 1 - les fonctions */
console.log('01 - Fonctions')

nombre1 = 10
nombre2 = 20

function additionner(nb1, nb2) {
    return nb1 + nb2
}

resultat1 = additionner(nombre1, nombre2)

console.log('resultat1 = ' + resultat1)

somme = function (nb1, nb2) {
    return additionner(nb1, nb2)
}

resultat2 = somme(nombre1, nombre2)

console.log('resultat2 = ' + resultat2)

multiplication = function (nb1, nb2) {
    return nb1 * nb2
}

resultat3 = multiplication(nombre1, nombre2)

console.log('resultat3 = ' + resultat3)

afficherOperation = function (nomOperation, operation, nb1, nb2) {
    console.log(nomOperation + '(' + nb1 + ',' + nb2 + ') = ' + operation(nb1, nb2))
}

afficherOperation('Somme', somme, 20, 40)
afficherOperation('Multiplication', multiplication, 10, 20)
afficherOperation('Soustraction', function (a, b) { return a - b }, 15, 5)