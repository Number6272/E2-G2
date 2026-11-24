/**
 * Verifie format d'email.
 * @param {string} email
 * @returns {boolean}
 */
export function emailValide(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Verifie numero a 10 chiffres qui  commence par 0.
 * @param {string} telephone
 * @returns {boolean}
 */
export function telephoneValide(telephone) {
  return /^0[1-9][0-9]{8}$/.test(telephone)
}

/**
 * Valide le formulaire d'inscription.
 * @param {Object} formulaire
 * @returns {Array} les messages d'erreur, vide si tout est bon
 */
export function validerInscription(formulaire) {
  const erreurs = []

  if (!emailValide(formulaire.email)) {
    erreurs.push('Email invalide')
  }

  if (!telephoneValide(formulaire.telephone)) {
    erreurs.push('Téléphone invalide')
  }

  return erreurs
}