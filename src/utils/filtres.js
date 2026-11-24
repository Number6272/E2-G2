/**
 * Filtre les projets ou les formation avec la recherche et les filtre.
 * @param {Array} liste
 * @param {string} recherche
 * @param {Object} filtres - categorie, niveau et techno
 * @returns {Array}
 */
export function filtrerListe(liste, recherche, filtres) {
  const resultat = []

  for (let i = 0; i < liste.length; i++) {
    const element = liste[i]

    if (!element.title.toLowerCase().includes(recherche.toLowerCase())) {
      continue
    }

    // un filtre vide veut dire qu'on garde tout
    if (filtres.categorie && element.category !== filtres.categorie) {
      continue
    }

    if (filtres.niveau && element.level !== filtres.niveau) {
      continue
    }

    if (filtres.techno && !element.technologies.includes(filtres.techno)) {
      continue
    }

    resultat.push(element)
  }

  return resultat
}