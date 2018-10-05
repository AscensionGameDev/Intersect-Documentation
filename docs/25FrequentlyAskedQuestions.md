---
title: Frequently Asked Questions
---
[TOC]

&nbsp;

Source Code
---------------------------
### Where can I download the source code?
> Intersect's source has not yet been made available. It is our wishes to disclose the source once we have finished the base engine, have had time to refactor our code, prepare documentation, and mentally ready ourselves to support this engine.

> We will have the source out to you all as soon as possible! Checkout our [development roadmap](https://www.ascensiongamedev.com/community/topic/691-intersect-development-road-map/?do=findComment&comment=12805) for our development goals and timeline leading up to the source release.

### What language is this engine created with?
> C# + Monogame

### Is there scripting support?
> Nope, but the source code will be released soon. Having the source of the engine will give you complete control of your game and make low level changes to the engine that scripting never could.

&nbsp;

Feature Requests
---------------------------
> The feature you're looking for might already be planned! Check our development [development roadmap](https://www.ascensiongamedev.com/community/topic/691-intersect-development-road-map/?do=findComment&comment=12805) If it's not there then you're always [welcome to post a suggestion.](http://www.ascensiongamedev.com/community/bug_tracker/intersect/)


&nbsp;

Engine Limitations
---------------------------
### How many players can play at the same time?
> We don't quite know. We are still working on fixing bugs and optimizing Intersect, but when all is said and done Intersect should be able to support hundreds or thousands of players online at the same time.


### How many maps, items, spells, classes, etc can I create?
> Short answer: More than you'll ever need.
Long answer: Potentially up to 2,147,483,647 of each. We don't think you will ever reach these limits - if you find any let us know!


&nbsp;

Mapping
---------------------------
### How can I change map or tile size?
> [See this!](https://www.ascensiongamedev.com/topic/666-faq-how-can-i-change-map-sizes/)

### Can I transfer maps from other engines?
> Due to the complications of using seamless in-game maps and our own propriatary map editor/data structure this is not something we currently offer and likely never will. Once we release the source code, however, you're more than welcome to give this a shot.


&nbsp;

Customization
---------------------------
### How do I change the language in Intersect? (From English -> Spanish, French, Etc)

------------


&nbsp;

Networking
---------------------------
### How can I make it so other players or designers can connect to my server to play or help design my game?
> This is a very loaded question. I will be writing a fully comprehensive guide to this in the very near future. In the mean time, it goes like this:
>- Set your SERVER_PORT in the Server/resources/config.xml file. **This is a UDP port.**
>- Configure all firewalls and antivirus programs between you and the internet to allow incoming traffic on that port to reach your computer.
>- Reboot your server and it will tell you whether or not your configuration is correct and your game accessible to the public.
>- When your server tells you that it is accessible, it will also tell you the PUBLIC_IP address and port that your client and editor need in order to connect.
>- Open the Client & Editor/Resources/config.xml file and input your public ip into the host field and SERVER_PORT into the port field.
>- Make sure your server is still running and then try to connect with the client.
>- If a connection is successful, you can archive your client and editor into a zip and upload that for your team or players.


### Where should I host my server?
> Renting a server from a professional hosting company is generally the way to go. Residential locations generally have high latency and low bandwidth network connections. A low latency, fast network is the most important part for hosting an Intersect game whilst giving your players a good experience. Hosting at home is fine for designing your game, but when it comes time for release we recommend either of the options below:
>
> **Rent a Virtual Private Server**
> You're able to host an Intersect server on almost any machine. A Windows or Linux VPS is fine. The following are my personal recommendations for VPS hosting services. Each of these companies have low latency, high bandwidth network connections that your game will need.
>
> Windows VPS or Linux VPS Hosting:
>- [OVH](https://www.ovh.com/us/dedicated-servers/hosting/)
>
> Linux VPS Hosting:
>- [Amazon AWS](https://aws.amazon.com/?nc2=h_lg) (Free tier for 1 year, CC required)
>- [Linode](https://www.linode.com/)
>- [DigitalOcean](https://www.digitalocean.com/)
>
> Dedicated Servers:
>- [So You Start](https://www.soyoustart.com/us/)
>
> &nbsp;
> &nbsp;
> &nbsp;
>
> **Intersect Hosting Solutions**
> Instead of renting and managing a server from one of the companies listed above I will host it for you! Allowing me to host your game saves you the headache of acquiring a server, fortifying it's security, doing backups, configuring it's firewall and keeping up with updates.
>
> [Click here to learn more.](https://www.ascensiongamedev.com/topic/2352-intersect-hosting-solutions-na-eu-servers-available/?page=1)

&nbsp;

Content
---------------------------
### How can I encrypt my graphics, sounds, etc so they can't be stolen?
> We fully understand the desire to protect the assets you created, found, or bought. Very little in life feels worse than seeing someone else steal your work and profit from it. From a development standpoint, however, providing a way to protect your resources is extremely challenging. There are several reasons why we're not including an encryption system in the base engine:
>
> When trying to protect your assets you don't want potential attackers to know what sort of protection/encryption that you're using. If an encryption system was included in the base engine then all potential attackers would know how you're protecting your assets making them easier to obtain.
>
> Even the best of encryptions are vulnerable. AAA game studios encrypt their game assets and they're promptly broken over and over again. ([See Blizzard's encrypted MPQ files](https://en.wikipedia.org/wiki/MPQ_(file_format), and [one of many tools to decrypt them.](https://github.com/icza/mpq)) We do not feel like there is a system we can design that would protect assets long enough to be worth the time of development.
>
> Finally, even if your graphics were perfectly protected they could still be obtained by hacking the communication between the game and your graphics card, or just taking screenshots of your game and ripping content manually.
>
> We highly recommend spending more time on creating a great game than protecting your assets. Anyone who has to steal assets to get a jump start on their project won't have the dicipline to make a great game.
>
> If you ever see a member on our community using your assets without permission please feel free to reach out to us via our [Contact Form](https://www.ascensiongamedev.com/contact/) detailing the situation and any applicable documentation. We take theft seriously and will do our best to protect the interests of our members.