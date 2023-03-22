---
title: Port Forwarding
---

> *Please note that the details of configuring port forwarding may vary depending on the specific router you are using and its configuration, so it's recommended to consult the router's documentation or contact your internet service provider for assistance*.

To configure port forwarding, follow these steps:

1. **Log into your router's web interface** by typing its IP address into your web browser. The IP address is often found in the documentation provided with the router by your internet service provider.

2. Find the section in the router's interface for **port forwarding**. This is usually found under a heading such as "NAT" or "Firewall".

3. **Create a new rule** for the game server by specifying the protocol (UDP), the public port (5400 by default for Intersect), and the private IP address and port of the device running the *Intersect Engine's* server.

4. **Save** the rule.

5. **Verify that the port has been forwarded** by using a service such as [canyouseeme.org](https://canyouseeme.org/), which allows you to check if a specific port is open on a given IP address.