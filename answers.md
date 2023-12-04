# Questions

## git

### Quel est l'intérêt de commiter régulièrement et de manière atomique ?
L'intérêt de commiter de manière régulière est d'avoir des sauvegardes régulières de notre travail.
De manière atomique signifie que chaque commit est une modification ou correction d'un bug, etc ...
### A quoi sert une branche de type feature dans un développement logiciel de type git flow ?
Une branche de type feature, permet d'ajouter une nouvelle fonctionnalité à l'application. Elle est souvent créé à partir de la branche develop.
### Quelle est la différence entre une branche main et une branche develop ?
La branche main : est la branche principale de l'application, elle est censé fonctionner et c'est elle qu'on présente et qu'on met à disposition
La branche develop : est la branche de dévellopement principale, c'est sur elle que l'on s'appuie lorsque l'on veut créer des branches features. L'objectif de cette branche est de développer dessus puis une fois que l'on est satisfait de notre application, de la merge vers notre branche main.
### Quelle est la différence entre git add, git commit et git push ?
git add : Permet d'ajouter nos modifications de Changes à Staged Changes.
git commit : Permet d'enregistrer les modifications et d'ajouter un message.
git push : Permet d'envoyer nos modifications que l'on a commiter vers notre github.

## github

### Quel est l'intérêt d'une protection de branche ?

Protéger une branche permet aux utilisateurs de ne pas faire toutes les actions sur cette branche. Cela permet d'empêcher des fausses manipulation et d'ajouter du contenu dans une branche sans vérification.

### Quel est l'intérêt d'une pull request ?

La création d'une pull request permet à l'utilisateur de proposer des modifcations sur une branche en mergeant une branche sur une autre. L'objectif est qu'elle soit validé par une ou plusieurs personnes de l'équipe avant d'être validé et que les deux branches soit fusionnées.

## versionning

### Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?
On passe de 1.0.0 à 1.0.1 lors d'une correction de bug 
### Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?
On passe de 1.0.0 à 1.1.0 lors de l'ajout d'une fonctionnalité
### A quoi sert une version release candidate ?
Une version release est la dernière version avant que l'application soit publié. Elle est vérifié et présenté, si elle fonctionne et convient à tout le monde alors elle est publié.

## test

### Quel est l'intérêt des tests unitaires ?
Ce sont des tests permettant de vérifier le fonctionnement des fichiers de code individuellement.
Cela nous permets de détecter des bugs et de savoir où ils sont.