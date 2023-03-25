---
title: Port Forwarding
---

_**"Port forwarding" for VPSes or dedicated servers provided to you by a hosting company usually only require opening the port on the firewall for the machine, there should be no router port forwarding -- consult your hosting provider for specifics if you run into issues.**_

_Please note that the process of configuring port forwarding may vary depending on the specific router you are using and its configuration. Therefore, it is recommended to consult the router's documentation or contact your internet service provider for assistance._

To configure port forwarding, follow these steps:

1. **Find your router's IP address.** _(Skip to step 2 if you already know your router's IP address)._
   - Your router might use `192.168.0.1` , `192.168.1.1` or `10.0.0.1` as IP address.
   - If it is none of the above, refer to the documentation provided with the router (which may have been by your internet service provider). Alternatively, you can find it with a connected device by following these steps:
      - On Linux: open a *Terminal* and use the following command: `ip route`. The output line that starts with ‘default via’, gives you the gateway IP, which is your router’s IP address.
      - On Mac: open *System Preferences*, navigate to Network > Advanced > TCP/IP, and note the IP address next to *“Router"*.
      - On Windows: open *Command Prompt*, run `ipconfig` and look at the IP next to *“Default Gateway”*.

2. **Access your router's web interface.**
   - Open a web browser and enter your router's IP address into the address bar.
   - Login with the device's credentials or those provided by your internet service provider.

3. Find the section **port forwarding** in the router's interface.
   - This is usually found under a heading such as "Ports", "Port Forwarding", NAT" or "Firewall", and can be listed under a section labeled "Advanced".

4. **Create a new rule** for the game server by specifying:
   - Protocol: UDP
   - Public port: 5400 (default for Intersect, this number will be different if you changed it)
   - Private IP address and port of the device running the Intersect server
   - Note that if you also intend to use the REST API for a website hosted outside of your network, that you also need to add a rule for the TCP protocol, but **most routers allow you to create a single combined rule for both TCP and UDP**.
     - If the game and API ports are not the same you should create two separate rules; the game port (UDP) is configured in `resources/config.json`, and the API port (TCP) is configured in `resources/config/api.config.json`.

5. **Save** the rule.

6. **Verify that the port has been forwarded**
   - Use a service such as [canyouseeme.org](https://canyouseeme.org/), which allows you to check if a specific port is open on a given IP address.
   - If the port forwarding verification fails, make sure that the firewall on the computer running the Intersect server is configured correctly to allow incoming connections on the specified port. You can also try using another device on the network to check if the port is open.
