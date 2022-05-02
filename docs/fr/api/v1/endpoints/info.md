# Informations Serveur

## Autorisé

Vérifie les token et retourne si oui ou non vous êtes autorisé à accéder à des points de terminaison api protégés.

### Requête

**URL** : `/api/v1/info/authorized`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps**
Vide

---

### Réponse

**Condition** : NA

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"authorized": true
}
```

## Nom de Jeu & Port

Renvoie le nom du jeu et le numéro de port de votre serveur.

### Requête

**URL** : `/api/v1/info`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps**
Vide

---

### Réponse

**Condition** : NA

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"name": "Intersect",
	"port": 5400
}
```

## Statistiquess

Renvoie les statistiques du serveur actif comme le compte de joueurs en ligne, les disponibilités, les cps, etc.

### Requête

**URL** : `/api/v1/info/stats`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps**
Vide

---

### Réponse

**Condition** : NA

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"uptime": 1258852,
	"cps": 92,
	"connectedClients": 0,
	"onlineCount": 0
}
```


## Configuration

Renvoie la configuration du serveur actif.

### Requête

**URL** : `/api/v1/info/config`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps**
Vide

---

### Réponse

**Condition** : NA

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"GameName": "Intersect",
	"ServerPort": 5400,
	"AdminOnly": false,
	"UPnP": true,
	"OpenPortChecker": true,
	...
}
```
