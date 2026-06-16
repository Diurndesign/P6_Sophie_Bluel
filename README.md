# Portfolio de Sophie Bluel — Architecte d'intérieur
 
Projet réalisé dans le cadre de la formation **Intégrateur Web** chez OpenClassrooms.  
Il s'agit d'un site portfolio dynamique pour Sophie Bluel, architecte d'intérieur, dont les contenus sont gérés via une API REST.
 
---
 
## Aperçu du projet
 
L'objectif est de rendre dynamique une page web statique fournie, en connectant le frontend à une API locale. Le projet couvre la manipulation du DOM, les appels API avec Fetch, l'authentification par token, et la gestion d'une modale d'administration.
 
---
 
## Fonctionnalités
 
- **Galerie dynamique** — chargement des projets depuis l'API au démarrage
- **Filtres par catégorie** — affichage des travaux selon le type sélectionné
- **Page de connexion** — authentification avec gestion des erreurs
- **Mode administrateur** — barre d'édition visible une fois connecté
- **Modale de gestion** — ajout et suppression de projets (avec prévisualisation d'image)
---
 
## Technologies utilisées
 
| Côté | Stack |
|---|---|
| Frontend | HTML5, CSS3, JavaScript vanilla (ES6+) |
| Communication | Fetch API, JSON |
| Authentification | JWT (JSON Web Token) |
| Backend | Node.js / Express *(fourni par OpenClassrooms)* |
 
---
 
## Prérequis
 
- [Node.js](https://nodejs.org/) v12 ou supérieur
- npm
---
 
## Installation et lancement
 
### 1. Cloner le dépôt
 
```bash
git clone https://github.com/ton-username/Portfolio-architecte-sophie-bluel.git
cd Portfolio-architecte-sophie-bluel
```
 
### 2. Lancer le backend
 
Le dossier `Backend` est fourni par OpenClassrooms et **n'est pas versionné** dans ce dépôt.  
Télécharge-le séparément, puis :
 
```bash
cd Backend
npm install
npm start
```
 
Le serveur démarre sur `http://localhost:5678`.
