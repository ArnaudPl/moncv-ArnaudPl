# moncv-ArnaudPl

> Réalisation d'un CV avec l'utilisation de webpack et jQuery dans le cadre du cours Projet de Technologies Web donné par M. Fritscher

## Installation

``` bash
# installer toutes les dépendences
npm install

# lancer le serveur local avec rafraîchissement automatique à l'adresse localhost:8080
npm run dev

# build pour la production
npm run build

# build pour la production avec un rapport d'analyse
npm run build --report

# déployer sur la branche gh-pages de l'association HEG-Web sur Github visible à l'adresse heg-web.github.io/moncv-ArnaudPl (tous les fichiers doivent avoir été commit)
npm run deploy
```

## Technologies utilisées

- [Vue-cli](https://www.npmjs.com/package/vue-cli)
    - Installation du package
        - ```$ npm i -g vue-cli```
    - Initialiser le projet (scaffold) avec le template webpack
        - ```$ vue init webpack moncv```
        - Répondre aux différentes questions selon les préférences
- [bootstrap v3.3](https://getbootstrap.com/docs/3.3/) sans dépendance jQuery
    - [bootstrap.native](https://www.npmjs.com/package/bootstrap.native)
        - Installation du package
            - ```$ npm i bootstrap.native@3.3.7 --save```
    - [bootstrap-only-css](https://www.npmjs.com/package/bootstrap-only-css)
        - Installation du package
            - ```$ npm i bootstrap-only-css --save```
    - Importer bootstrap.native et bootstrap-only-css dans le projet
        - Ajouter ces deux lignes au fichier moncv/src/main.js
            - ```import 'bootstrap.native';```
            - ```import 'bootstrap-css-only/css/bootstrap.min.css';```
- [jQuery](https://www.npmjs.com/package/jquery)
    - Installation du package
        - ```npm i jquery --save```
    - Charger jQuery partout pour éviter de devoir l'importer sur chaque script
        - Ajouter ```plugins: [ new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }) ],``` dans le fichier moncv/build/webpack.base.conf.js
- [push-dir](https://www.npmjs.com/package/push-dir)
    - Installation du package
        - ```$ npm i push-dir --save-dev```
    - Ajouter le script pour envoyer sur la branch gh-pages au fichier package.json
        - ```"deploy": "push-dir --dir=dist --branch=gh-pages --cleanup --verbose",```
- [Timeline.css](https://codepen.io/brady_wright/pen/NNOvrW)
- [Chart.js](https://www.npmjs.com/package/chart.js)
    - Installation du package
        - ```npm i chart.js --save```
    - Importer le package dans moncv/src/main.js
        - ```import Chart from 'chart.js';```
- [jquery-smooth-scroll](https://www.npmjs.com/package/jquery-smooth-scroll)
    - Installation du package
        - ````npm i jquery-smooth-scroll --save```
    - Importer le package dans moncv/src/main.js
        - ```import 'jquery-smooth-scroll';```
- [nav-scroll-spy](https://www.npmjs.com/package/nav-scroll-spy)
    - Installation du package
        - ```npm i nav-scroll-spy --save```
    - Importer le package dans moncv/src/main.js
        - ```import NavScrollSpy from 'nav-scroll-spy';```




