---
title: Getting Started
---

## Enable the API

For security purposes the API is disabled by default and must be enabled before you can start issuing commands.

Open the API configuration (located at `server/resources/config/api.config.json`)

Set the `Enabled` field to `true` as shown below:

```
  "Enabled": true,
```

Optionally change the `Hosts` field to listen on your desired network ports.

## Grant API Access

Before you can authenticate with the API you must have created a user account within the game.

After creating an account open the server console and issue the following command:

```
api [name] true
```

That command will grant the specified account access to authtenticate with the API.

You are now ready to request an authentication token from our API, [click here](../endpoints/authentication.md) to learn how.
