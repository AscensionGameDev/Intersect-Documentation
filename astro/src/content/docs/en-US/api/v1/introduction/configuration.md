---
title: Configuration
---


## [AllowedNetworkTypes](./configuration/allowednetworktypes.md)

## [CORS](./configuration/cors.md)

## [Hosts](./configuration/hosts.md)

## RefreshTokenLifetime

The duration that a refresh token is valid for, **in minutes**.

Default when built in Debug: `15`

Default when built in Release: `10_080` (7 days)

Suggested: `1440` (1 day) or longer

If the refresh token is used effectively as a session ticket, then this is the duration the session would last before expiring and basic authentication (username and password) would be required again. Note that a refresh token is needed to get a new access token (used for actual requests), and access tokens expire every 5 minutes by default.