---
title: Senhas
---


## Redefinição de senha

Redefinições de senha é um novo recurso oferecido no Beta 6. Para que a redefinição de senha funcione, o servidor deve ser capaz de enviar emails.

Configure uma conta de email em algum lugar que permita o envio de emails via SMTP. O Gmail é uma escolha óbvia para isso.

Abra seu Server/resources/config.json e insira suas informações SMTP. Exemplo abaixo.

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

Reinicie seu servidor. Se as configurações de SMTP estiverem presentes, a mensagem 'Esqueceu a senha?' O botão aparecerá na tela de login do seu cliente:

![Redefinição de senha](https://www.ascensiongamedev.com/resources/filehost/c7e2072b2697c3462423bf1b7903a295.png)

## Hashing de senha

As senhas são hashed antes de serem armazenadas no banco de dados. Cada conta possui um SALT gerado aleatoriamente.

Para verificar se uma senha de texto simples está correta, faça o seguinte:

- Faça o hash da senha de texto simples com SHA256 e remova quaisquer traços resultantes na saída.
- Concatine o salt com a senha e use um hash SHA256 no resultado, removendo quaisquer travessões na saída resultante novamente.

C# Referência de Código

```cs
var sha = new SHA256Managed();
string pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes("plaintext_password"))).Replace("-", "");
string salt = "AD07665AE12767B2B712752595D0E4C16479B01D07E66AF9F9E6081C811C4C21";  //Salt retirado do banco de dados
string encrypted_pass = BitConverter.ToString(sha.ComputeHash(Encoding.UTF8.GetBytes(pass + salt))).Replace("-", "");
```
