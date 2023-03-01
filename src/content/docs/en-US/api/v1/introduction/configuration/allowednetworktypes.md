---
title: Allowed Network Types
---

Because of how Owin requires the usage of `netsh` in order to specify certificates, HTTPS is a rather complicated ordeal for the API, but unfortunately the API has credentials and authentication tokens being passed back-and-forth, meaning HTTP is not sufficient for internet traffic. It however _is_ sufficient for local development and setting up the API behind a reverse proxy (such as NGINX, which are _much_ simpler to set up the TLS certificates for).

## `NetworkTypes` Flags

### `Loopback` (`1`) (Default) **Recommended for Reverse-Proxies**

Used for connections to the host computer (e.g. localhost, 127.0.0.1) and permits requests originating from the `127.0.0.0`-`127.255.255.255` address range.

Loopback can be used in conjunction with a reverse-proxy such as NGINX to add HTTPS (and only expose the reverse-proxy, not the API).

This setup can also be put inside of a container (e.g. Docker) so that only within the container is there access to the API over HTTP, and only NGINX is exposed to anything outside of the container.

The `0.0.0.0`-`0.255.255.255` address range is also exposed under the `Loopback` flag, but isn't really usable.

### `Subnet` (`2`)

This is for [link-local addresses](https://en.wikipedia.org/wiki/Link-local_address) and permits request from the following address ranges:

`169.254.0.0`-`169.254.255.255`
`255.255.255.255`

### `Private Network` (`4`)

This enables connections from devices accessible over your LAN (home router) or VPN (assuming the VPN assigns the correct IP address ranges), such as connecting from a phone or another computer on your network.

The following address ranges are permitted:
`10.0.0.0`-`10.255.255.255`
`100.64.0.0`-`100.127.255.255`
`172.16.0.0`-`172.31.255.255`
`192.0.0.0`-`192.0.0.255`
`192.168.0.0`-`192.168.255.255`
`198.18.0.0`-`198.19.255.255`

### Usage

The `AllowedNetworkTypes` configuration entry is the sum of the different `NetworkTypes` flags that you want to enable.

`1` would only allow localhost connections, `2` would only allow subnet connections (and would reject localhost), `5` would allow both localhost and LAN connections (but not subnet) and `7` would allow all of the previously listed.

The API is **strictly inaccessible over HTTP from external IP addresses**. A local reverse-proxy should be used to add HTTPS and _that_ should be exposed to the internet for secure external connections.
