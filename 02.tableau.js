/** Partie 2 - les tableaux */
villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

villes.forEach(function (element) {
    console.log(element)
})

lettreADansToutesLesVilles = villes.every(function (element) {
    return element.match(/a/i)
})

console.log('lettreADansToutesLesVilles = ', lettreADansToutesLesVilles)

auMoinsUneVilleAvecUnTiret = villes.some(function (element) {
    return element.match(/-/i)
})

console.log('auMoinsUneVilleAvecUnTiret = ', auMoinsUneVilleAvecUnTiret)

villesSansTiretSansEspace = villes.filter(function (element) {
    return !element.match(/[-\s]/i)
})

console.log('villesSansTiretSansEspace = ', villesSansTiretSansEspace)

villesMajusculeSeTerminantParS = villes.filter(function (element) {
    return element.match(/.*s$/)
}).map(function (element) {
    return element.toUpperCase()
})

console.log('villesMajusculeSeTerminantParS = ', villesMajusculeSeTerminantParS)