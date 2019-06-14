# Pour tester

Ceci répond à la question : « Nodemailer envois de mail par un bouton »

- Détails : https://forum.humancoders.com/t/nodemailer-envois-de-mail-par-un-bouton/3023/5

Voici un exemple basique d'envoi d'email en cliquant sur un bouton avec Node.js.

## Prérequis

Node.js et npm à jour.

## Tester 

1. Ouvrez un invité de commande
2. Exécutez `npm install`
3. Exécutez `node server.js --browse`
4. Ouvrez l'adresse `http://localhost:7749/` dans un navigateur
5. Cliquez sur `Envoyer un email`
6. Constatez le résultat côté client doit être `Votre email n'a pas été envoyé…` car aucun paramètre n'est correcte vers le serveur SMTP
7. Observez les messages de debug côté client (F12 > Console) et côté serveur (Invité de commande)
8. Analysez le code présent et adaptez-le à vos besoins.