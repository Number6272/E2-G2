# WebCraft Solutions - React

## Architecture

pages/ : les pages (Home et InscriptionPage). Elles chargent les données et gardent l'état.
components/ : les composants d'affichage. Ils reçoivent tout par props.
hooks/useFetch.jsx : charge une API et renvoie les données, le chargement et l'erreur.
utils/validation.js : validation du formulaire d'inscription.
utils/filtres.js : recherche et filtres des projets et des formations.
constantes.js : les URL des deux API.

SearchBar, FilterBar et Modal sont utilisés dans les deux sections de la page d'accueil.