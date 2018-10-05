---
title: Intersect's Database
---

Info will be placed here discussing how to navigate Intersect game databases. Currently the game database can be found at Server/Resources/intersect.db.

### Passwords
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
