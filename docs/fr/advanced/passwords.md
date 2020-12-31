# Mot de passe

## Réinitialisation des mots de passe
La réinitialisation des mots de passe est une nouvelle fonctionnalité offerte dans la Beta 6. Afin que le réinitialisateur fonctionne le serveur doit être capable d'envoyer des e-mails.

Configurer un compte e-mail à un endroit autorisant d'envoyer des mails via SMTP. Gmail est un choix évidant pour cette fonction.

Ouvrez votre Server/resources/config.json et écrivez vos informations SMTP. Exemple ci-dessous.

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

Redémarrez votre serveur. Si les paramètres SMTP sont présent un bouton 'Forgot Password?' sera affiché sur le menu de connexion.

![Password Reset](https://www.ascensiongamedev.com/resources/filehost/c7e2072b2697c3462423bf1b7903a295.png)


## Hashing des mots de passe
Passwords are hashed before being stored in the database. Each account has a SALT which is randomly generated.

To check if a plaintext password is correct do the following:
* Hash the plaintext password with SHA256 and remove any resulting dashes in the output.
* Concatinate the salt to the password and use a SHA256 hash on the result removing any dashes in the resulting output again.

La référence du code C# 
```cs
var sha = new SHA256Managed();
string pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes("plaintext_password"))).Replace("-", "");
string salt = "AD07665AE12767B2B712752595D0E4C16479B01D07E66AF9F9E6081C811C4C21";  //Salt pulled from the database
string encrypted_pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes(pass + salt))).Replace("-", "");
```
