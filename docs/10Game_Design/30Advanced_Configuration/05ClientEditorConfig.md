---
title: Client & Editor Config
---

Configuration files are read and interpreted whenever Intersect launches. The values will affect certain characteristics and behaviors of your client or editor. Intersect reads config files in XML format so its important that all variables are within their apropriate XML tags. XML is ***CaSe sEnSItiVe*** so make sure your tags are as well.

The configuration file for the Client & Editor can be found at the following path: Client and Editor/resources/config.xml

Language: This is used to set the language for your game. This can range from English to Chinese or even Clingon - assuming you have the language XML file for it! Additional language files not included in the default engine can be downloaded on the forums. The client and editor will read a language XML file on launch in the directory  /resources/languages/ and the filename you specify within the language tags. Default is english.

Host: The IP address of the server your client is trying to connect to.

Port: The port number the server is listening on.

For more advanced information on host and port read port forwarding.

RenderCache: Not sure why we need this option JC.

MenuBGM: Menu background music. Intersect plays the music from the default music directory of /resources/music/ with the file specified within the XML tags. .ogg is the only media file supported by Monogame aside from .wav which is used for sound effects.

Main Menu GUI elements:

MenuBG: Menu Background.
Logo:  Game logo image.
IntroBG: Menu loading/introduction background image.

Intersect loads images from these tags onto the main menu of the client from the /resources/gui/ directory with the file names specified. The file format is expected to be included within the tags. Image type .PNG is prefered.