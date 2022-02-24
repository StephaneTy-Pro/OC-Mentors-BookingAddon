# OC-Mentors-BookingAddon


![](https://img.shields.io/badge/build-pass-success)
![](https://img.shields.io/badge/version-1.0-orange)
[![](https://img.shields.io/badge/chat-workplace-blueviolet)](https://openclassrooms.workplace.com/groups/314612209540660/)


## Abstract
Cet addon permet au mentor de réserver un lot de session. Par exemple les sessions pour tous les étudiants sur les 3 semaines à venir.
Pour le moment cet addon fonctionne en lien avec google sheet


## Démarrage rapide

### Préalable

- Installer l'extension tampermonkey pour votre navigateur (greasmonkey ou violetmonkey devraient fonctionner mais je n'ai pas testé). Cette extension permet d'injecter un script ou un ensemble de script dans une page web affichée par le navigateur.
- Installer l'addon [Facturier](https://github.com/StephaneTy-Pro/OC-Mentors-AccountAddon) voir le fichier README pour plus de détail sur l'installation
- Création d'un document google sheet avec un format particulier cf 

### Installation
- Cliquer sur l'icone tampermonkey présent sur la page de votre navigateur et choisir l'option dashboard (ou l'activer depuis la gestion des plugins)
- Deux options existent pour l'installation
- Option 1: en mode automatique
	- Prendre l'onglet Utilitaires ou Utilities dernière ligne "Install from URL" , coller l'url du script ( /!\ bien penser à prendre le format RAW du lien github ce qui donne https://raw.githubusercontent.com/StephaneTy-Pro/OC-Mentors-BookingAddon/master/dist/app.min.js et non pas https://github.com/StephaneTy-Pro/OC-Mentors-BookingAddon/blob/master/dist/app.min.js) 
- Option 2: à la main
	- Cliquer sur le + présent dans la barre de menu à côté de l'onglet "Installed UserScripts"
	- recopier le contenu du fichier github de l'[application](https://raw.githubusercontent.com/StephaneTy-Pro/OC-Mentors-BookingAddon/master/dist/app.min.js)(en mode raw) dans la nouvelle page ainsi ouverte 
	- Sauvegarder
	
### Feuille google sheet
- Créer un document vierge
- Ajouter une première ligne contenant les entêtes de colonnes : ID, FULLNAME, PROJECT, DAY, TIME
- Remplir les lignes suivantes avec les champs FULLNAME: le nom de l'étudiant tel qu'il apparait dans la liste des étudiants qui vous sont attribués, DAY: le jour de la semaine (LUNDI à DIMANCHE) et TIME: l'heure au format france de votre session (sera convertie au format UTC pour la réservation)
- Version finale

| ID | FULLNAME        | PROJECT | DAY   | TIME  |
| -- | --------------- | ------- | ----- | ----- |
|    | Stéphane Torchy |         | LUNDI | 09:00 |

- Partager le document via une url: Menu Fichier Partager/Partager avec d'autres utilisateurs, regarder le panneau du bas : Obtenir le lien cliquer sur copier le lien vous devriez récuperer un lien de cette forme https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/edit?usp=sharing ; les XXXXXXXXXXXX étant remplacés par id unique de votre document. Le droit d'accès n'a pas besoin d'être ouvert en modification, mais peut rester en mode consultation (valeur par défaut) 

### Utilisation

Dans la barre de menu du Facturier vous devriez voir apparaitre un nouveau bouton : R.SESSION qui va vous permettre de réserver les sessions

Cliquer sur ce bouton fait apparaitre un écran dans lequel on vous demande de : sélectionner la date, et le lien google sheet

Coller/Recopier/Saisir le lien google sheet (ce champs sera sauvegardé d'un lancement sur l'autre dans votre navigateur)

Séléctionner une date : /!\ toujours séléctionner un lundi (cf la FAQ pour une explication)

Cliquer sur réserver

## Mise à jour

Les mises à jour sont automatiques via tampermonkey, vous devriez par un popup être notifié d'une nouvelle version

### Tester une mise à jour

En ajoutant un nouveau script tampermonkey et en procédant comme une nouvelle installation de ce script je peux très bien conserver deux versions du script actuel

## Désactiver la fonctionnalité

Dans tampermonkey désactiver l'utilisation du script , cette action est aussi possible au travers du menu disponible sur l'icone tampermonkey du navigateur (icone : carré noir avec deux ronds blancs)

## FAQ

>Est ce que mes données sont transmises sur un site externe

Non c'est l'avantage de ce système, vous vous connectez sur votre compte avec les sécurités du site et on utilise les accès ainsi ouverts pour accéder aux services du site. Jamais l'application ne demandera vos identifiants mots de passe, jamais les données collectées ne seront sauvegardés en dehors de votre navigateur

>Où sont stockées les variables

Dans le navigateur

>J'ai changé de navigateur je ne retrouve pas mes paramètres

C'est normal ils sont liés au navigateur

>Le calendrirer s'affiche de manière étrange pour le mois en cours lors de son premier affichage après clic

C'est normal, il démarre au jour courant par défaut (puisqu on ne peut saisir qu'a posteriori)


>L'application affiche un message d'erreur : le premier jour de la semaine doit être un lundi

Dans le selecteur de date, la date de début de traitement doit toujours être un lundi, les jours étant calculés par différence entre le jour indiqué sur la feuille excel et le premier jour de la date de départ

>J'ai fait une erreur dans la date que puis je faire

corriger les dates une à une dans l'interface oc pour le moment il n'y a pas de retour arriere possible, pas plus que de suppression/modification en lot
