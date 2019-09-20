# Passwords

## Password Reset
Password resets is a new feature offered in Beta 6. For password resetting to work the server must be able to send emails.

Setup a email account somewhere that allows sending emails via SMTP. Gmail is an obvious choice for this.

Open your Server/resources/config.json and enter your SMTP information. Example below.

``` json
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

Restart your server. If the SMTP settings are present a 'Forgot Password?' button will appear on your client's login screen:

![Password Reset](https://www.ascensiongamedev.com/resources/filehost/c7e2072b2697c3462423bf1b7903a295.png)


## Password Hashing
Passwords are hashed before being stored in the database. Each account has a SALT which is randomly generated.

To check if a plaintext password is correct do the following:
* Hash the plaintext password with SHA256 and remove any resulting dashes in the output.
* Concatinate the salt to the password and use a SHA256 hash on the result removing any dashes in the resulting output again.

C# Code Reference
```
var sha = new SHA256Managed();
string pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes("plaintext_password"))).Replace("-", "");
string salt = "AD07665AE12767B2B712752595D0E4C16479B01D07E66AF9F9E6081C811C4C21";  //Salt pulled from the database
string encrypted_pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes(pass + salt))).Replace("-", "");
```