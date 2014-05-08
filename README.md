WorldProno2014
============

Application de pronostics entre amis de la coupe du mondre de Football 2014

## Production
Pour voir l'appli en production:
[Live version](http://worldprono2014.herokuapp.com/)


Version
----

0.1

Technos
-----------

WorldProno utilise les technos suivantes pour fonctionner correctement :

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [AngularJS] - duh 
* [jQuery] - duh 

Installation au niveau syst�me
--------------
A faire une fois par PC
 
* Installer [node.js]
* Installer [Grunt] sur le syst�me (-g) via une fenetre DOS 

```sh
npm install -g grunt-cli
```

* Installer [Bower] sur le syst�me (-g)

```sh
npm install -g bower
```

Installation des d�pendances au niveau de l'application
--------------
* Ouvrir une fenetre DOS au niveau du r�pertoire ou les fichiers ont �t� t�l�charg�, on va installer en local (donc pas de -g dans les lignes de commandes) les modules nodejs et dependances.

```sh
npm install
```
 cela va cr�er un repertoire node_modules et t�l�charger tous les modules dont nous avons besoin. Cela marche grace au fichier *package.json* 

* on va installer en local (donc pas de -g dans les lignes de commandes) les d�&pendances r�f�renc�es grace � bower. Cela marche grace au fichier _bower.json_

```sh
bower install
```
Cela va cr�er un repertoire bower_components au niveau du repertoire app. Si bower pose des questions, il faut les r�ponses qui contiennent le mot "WorlProno2014"


Lancement de l'application en mode developpement
--------------
apr�s c'est magique, on tape

```sh
grunt serve
```
et ca lance tout; ou pour les fain�ants comme moi, juste le fichier start.cmd.

**Free Software, have fun!**

[john gruber]:http://daringfireball.net/
[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[jQuery]:http://jquery.com
[express]:http://expressjs.com
[Grunt]:http://gruntjs.com/
[Bower]:http://bower.io/
[AngularJS]:http://gruntjs.com/


