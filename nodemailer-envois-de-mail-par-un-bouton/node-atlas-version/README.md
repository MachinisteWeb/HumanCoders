# Pour tester

Ceci répond à la question : « Nodemailer envois de mail par un bouton »

- Détails : https://forum.humancoders.com/t/nodemailer-envois-de-mail-par-un-bouton/3023/5

Voici un exemple basique d'envoi d'email en cliquant sur un bouton avec [NodeAtlas](https://node-atlas.js.org/).

## Prérequis

Node.js et npm à jour.

## Tester 

1. Ouvrez un invité de commande
2. Exécutez `npm install`
3. Exécutez `node server.na --browse`
4. Cliquez sur `Envoyer un email`
5. Constatez le résultat côté client doit être `Votre email n'a pas été envoyé…` car aucun paramètre n'est correcte vers le serveur SMTP
6. Observez les messages de debug côté client (F12 > Console) et côté serveur (Invité de commande)
7. Analysez le code présent et adaptez-le à vos besoins.