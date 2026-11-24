# WebCraft Solutions - React

Migration du portail WebCraft Solutions (projets et formations) en React.

## Lancer le projet

npm install
npm run dev

Le site est ensuite disponible sur http://localhost:5173.

## Technologies

- React 18
- React Router 6
- Bootstrap 5
- prop-types pour typer les props des composants

## Pages et routes

- `/` : page d'accueil avec le Hero, la section projets et la section formations.
- `/inscription` : formulaire d'inscription à une formation.
- `/inscription/:idFormation` : même formulaire, avec la formation déjà choisie. On y arrive depuis le bouton "S'inscrire" de la modale d'une formation.

## Structure du projet
 
```
E2-G2/
├── index.html
├── package.json
├── package-lock
├── .gitignore
├── vite.config.js
├── README.md
├── public/
│   └── images/
│       ├── favicon.png
│       └── logo.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── constantes.js
    ├── pages/
    │   ├── Home.jsx
    │   └── InscriptionPage.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── SearchBar.jsx
    │   ├── FilterBar.jsx
    │   ├── ProjectCard.jsx
    │   ├── CourseCard.jsx
    │   ├── Modal.jsx
    │   ├── Loader.jsx
    │   └── InscriptionForm.jsx
    ├── hooks/
    │   └── useFetch.jsx
    └── utils/
        ├── filtres.js
        └── validation.js
```

## Architecture

- `pages/` : les pages (Home et InscriptionPage). Elles chargent les données et gardent l'état.
- `components/` : les composants d'affichage. Ils reçoivent tout par props.
- `hooks/useFetch.jsx` : charge une API et renvoie les données, le chargement et l'erreur.
- `utils/validation.js` : validation du formulaire d'inscription.
- `utils/filtres.js` : recherche et filtres des projets et des formations.
- `constantes.js` : les URL des deux API.

## Fonctionnement

Les pages appellent `useFetch` avec l'URL de l'API. Pendant le chargement, le composant `Loader` s'affiche. Si l'API ne répond pas, un message d'erreur s'affiche à la place.

Une fois les données reçues, la page garde la recherche, les filtres et l'élément sélectionné dans son état. Elle passe ensuite ces valeurs aux composants par props.

La liste affichée est calculée avec `filtrerListe`. La recherche porte sur le titre. Un filtre vide garde tous les éléments.

## Composants réutilisables

SearchBar, FilterBar et Modal sont utilisés dans les deux sections de la page d'accueil. FilterBar n'affiche que les filtres qu'on lui donne : catégories et technologies pour les projets, et en plus les niveaux pour les formations.

## Formulaire d'inscription

Les champs utilisent la validation HTML (`required`, `type="email"`, `pattern` pour le téléphone). Au moment de l'envoi, `validerInscription` vérifie aussi l'email et le téléphone. Si tout est bon, un message de confirmation s'affiche.

## IA

le logo est fait avec ia.