---
title: Mots de Passe
---


## Réinitialisation Mot de Passe
La réinitialisation de mot de passe est une nouvelle fonctionnalité offerte par la Beta 6. pour que la réinitialisation du mot de passe fonctionne le serveur doit être capable d'envoyer des emails.

Mettre en place un compte email sur une plateforme qui permet d'envoyer des email via SMTP. Gmail est un choix évident pour ça.

Ouvrez votre fichier Server/resources/config.json et entrez vos informations SMTP. Exemple ci-dessous.

```json
  "SmtpSettings": {
    "FromAddress": "ascensiongamedev@gmail.com",
    "FromName": "Ascension Admin",
    "Host": "smtp.gmail.com",
    "Port": 587,
    "UseSsl": true,
    "Username": "ascensiongamedev@gmail.com",
    "Password": "password"
  },
```

Redémarrez votre serveur. Si les réglages SMTP sont effectués un bouton 'Mot de passe oublié?' apparaîtra sur l'écran de connexion de votre client:

![Réinitialisation mot de passe](https://www.ascensiongamedev.com/resources/filehost/c7e2072b2697c3462423bf1b7903a295.png)


## Hash du Mot de Passe
Les mots de passe sont hashé avant d'être stockés dans la base de données. Chaque compte possède un SALT généré aléatoirement.

Pour vérifier qu'un mot de passe en texte clair est correct, suivez ces étapes:
* Hashez le mot de passe en clair avec SHA256 et enlevez tous les tirets résultant de cette production.
* Enchaînez le salt au mot de passe et utilisez un hash SHA256 sur le résultat en retirant tous les tirets résultant de cette production à nouveau.

C# Référence Code
```cs
var sha = new SHA256Managed();
string pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes("plaintext_password"))).Replace("-", "");
string salt = "AD07665AE12767B2B712752595D0E4C16479B01D07E66AF9F9E6081C811C4C21";  //Salt pulled from the database
string encrypted_pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes(pass + salt))).Replace("-", "");
```