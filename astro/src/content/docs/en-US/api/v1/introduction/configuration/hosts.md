---
title: Hosts `Array<string>`
---


The hosts array is used to determine which URI hosts the server will bind to.

In theory it is possible to use the `netsh` (_on Windows_) to register certificates for HTTPS and the Intersect API can be bound directly to an `https://` host, but it's rather burdensome and convoluted. It is not known what would be used on Linux and MacOS and isn't recommended to be used. A reverse-proxy is a simpler solution that will also be portable across the different platforms that are supported by the reverse-proxy software (e.g. NGINX).

The recommended value is the default (`http://localhost:5400`) and to run a reverse-proxy on localhost to expose the API over HTTPS, but if you wish to use a non-standard port you can change the port number, and if your reverse-proxy is not hosted on the machine, but is hosted over your VPN or LAN connection, `http://*:5400` can be used to allow requests from any address (which will be restricted to private/localhost networks by `AllowedNetworkTypes`).

Note that on windows if you do not specify `localhost` and instead specify something like `*` you **will need to use `netsh`, run from a command prompt or powershell with admin privileges**:

`netsh http add urlacl url=http://*:5400/ user=Everyone listen=yes`