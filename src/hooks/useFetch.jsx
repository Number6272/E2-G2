import { useState, useEffect } from 'react'

// recupere les donnees d'une api et renvoie aussi apres l'etat de chargement et l'erreur
function useFetch(url) {
  const [donnees, setDonnees] = useState(null)
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        // fetch ne passe pas dans le catch pour une 404 ou une 500.
        if (!res.ok) {
          throw new Error('Impossible de charger les données')
        }
        return res.json()
      })
      .then((json) => setDonnees(json))
      .catch((err) => setErreur(err.message))
      .finally(() => setChargement(false))
  }, [url])

  return { donnees, chargement, erreur }
}

export default useFetch