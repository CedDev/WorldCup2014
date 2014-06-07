WorldProno2014
============

Application de pronostics entre amis de la coupe du mondre de Football 2014

### Production
Pour voir l'appli en production:
[Live version](http://worldprono2014.herokuapp.com/)


###Version
Beta 0.1 : 05 Mai 2014
Version 1.0 : 01 juin 2014
Version 1.0.3 : 02 juin 2014
---


###Technos

WorldProno utilise les technos principales suivantes pour fonctionner correctement :

BackEnd
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Passport] - Simple, unobtrusive authentication for Node.js.
* [MongoDB] -  open-source document database, and the leading NoSQL database

FontEnd
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [AngularJS] - Superheroic JavaScript MVW Framework

---

###Installation au niveau syst�me
A faire une fois par PC
 
* Installer [Node.js]
* Installer [MongoDB]
* Installer [Grunt] sur le syst�me (-g) via une fenetre DOS 

```sh
npm install -g grunt-cli
```

* Installer [Bower] sur le syst�me (-g)

```sh
npm install -g bower
```

---

###Installation des d�pendances au niveau de l'application
* Ouvrir une fenetre DOS au niveau du r�pertoire ou les fichiers ont �t� t�l�charg�s, on va installer en local (donc pas de -g dans les lignes de commandes) les modules nodejs et dependances.

```sh
npm install
```
Cela va cr�er un repertoire node_modules et t�l�charger tous les modules dont nous avons besoin. Cela marche grace au fichier *package.json* 

* Installer en local (donc pas de -g dans les lignes de commandes) les d�pendances r�f�renc�es grace � bower. Cela marche grace au fichier _bower.json_

```sh
bower install
```
Cela va cr�er un repertoire bower_components au niveau du repertoire app. Si bower pose des questions, il faut les r�ponses qui contiennent le mot "WorlProno2014"


###Lancement de l'application en mode developpement
apr�s c'est magique, on tape

```sh
grunt serve
```
et ca lance tout
... ou pour les fain�ants comme moi, lancer juste le fichier start.cmd.

---

###Annexes

#####Yeoman:
Il s'agit d'une application bas�e sur [AngularJS Full Stack] : Yeoman generator for creating MEAN stack applications, using MongoDB, Express, AngularJS, and Node. Featuring:
* Express server integrated with grunt tasks
* Livereload of client and server files - _toute modification sur un fichier recharge la page web instantan�ment_
* Support for Jade and CoffeeScript
* Easy deployment workflow.
* Optional MongoDB integration 
* Optional Passport integration for adding user accounts

#####Vid�os de formations:
Retrouver des vid�os de formation super bien faites et en francais sous [Graphikart](http://www.grafikart.fr)
* [AngularsJS](http://www.grafikart.fr/formation/angularjs)
* [Nodejs chat](http://www.grafikart.fr/tutoriels/nodejs/nodejs-socketio-tchat-366)
* [Bower](http://www.grafikart.fr/tutoriels/javascript/bower-474)
* [Grunt](http://www.grafikart.fr/tutoriels/grunt/grunt-introduction-470)
* [Yeoman](http://www.grafikart.fr/tutoriels/internet/yeoman-475) _que vous pouvez (devez ?! ;-b) installer si vous souhaitez cr�er une autre appli en partant de z�ro_

#####Editeur de code html/js/css:
* [Sublime Text 3] pour coder avec plein de plugins, tr�s sympa. 

---

** Have fun!**

[john gruber]:http://daringfireball.net/
[Node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[jQuery]:http://jquery.com
[express]:http://expressjs.com
[Grunt]:http://gruntjs.com/
[Bower]:http://bower.io/
[AngularJS]:http://gruntjs.com/
[Passport]:http://passportjs.org/
[MongoDB]:http://www.mongodb.org/
[AngularJS Full Stack]:https://github.com/DaftMonk/generator-angular-fullstack
[Sublime Text 3]:http://www.sublimetext.com/