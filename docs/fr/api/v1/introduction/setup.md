# Bien commencer


## Activer l'API
Pour des raisons de sécurité, l'API est désactivée par défaut et doit être activée avant de pouvoir commencer à émettre des commandes.

Ouvrir le fichier de configuration de l'API (located at `server/resources/config/api.config.json`)

Définissez le champ `Enabled` sur `true` comme indiqué ci-dessous :

```
  "Enabled": true,
```

Modifiez éventuellement le champ `Host` pour écouter sur les ports réseau de votre choix.

## Accorder l'accès à l'API
Avant de pouvoir vous authentifier avec l'API, vous devez avoir créé un compte utilisateur dans le jeu.

Après avoir créé un compte, ouvrez la console du serveur et exécutez la commande suivante :

```
api [name] true
```

Cette commande accordera au compte spécifié l'accès pour s'authentifier avec l'API.

Vous êtes maintenant prêt à demander un jeton d'authentification à notre API, [cliquez ici](../endpoints/authentication.md) pour apprendre comment faire.
