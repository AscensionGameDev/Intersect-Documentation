---
title: Beta 4.X -> Beta 4.5
---

<div class="alert alert-danger">
  <strong>Stop!</strong> Intersect upgrades must be done in order! You cannot skip from Alpha 1.X or Beta 1 to Beta 4. Make sure you are using Intersect Beta 4, 4.1, or 4.2 before following the instructions in this guide.
</div>

## Intersect Beta 4.4 Upgrade Instructions

### Step 1: Make a backup of your game!
Nothing will go wrong but it's better to have a backup just in case. Copy your Intersect Beta 4 folder and paste it somewhere else for safe keeping.
![MakeABackup](http://www.ascensiongamedev.com/resources/filehost/95a01605b697f2d9f92a2453b6d0dd7a.gif)

------------

### Step 2: Delete the following files and folders
* Client and Editor/libs    (Folder)
* Client and Editor/Intersect Client.exe.config
* Client and Editor/Intersect Editor.exe.config
* Any PDB files in the Client and Editor folder.

* Server/libs               (Folder)
* Server/Intersect Server.exe.config
* Server/Intersect Migration Tool.exe.config
* Any PDB files in the Server folder.

------------

### Step 3: Fix Character Stats
Open the following file Client and Editor/Resources/Languages/Client.English.xml

Search for the \<ItemDesc\> block and add the following lines to it
~~~~
        <string id="stat0">Attack: {00}</string>
        <string id="stat1">Ability Power: {00}</string>
        <string id="stat2">Defense: {00}</string>
        <string id="stat3">Magic Resist: {00}</string>
        <string id="stat4">Speed: {00}</string>
~~~~

------------

### Step 4: Download Intersect Beta 4.5
Download Intersect Beta 4.5 [here](https://www.ascensiongamedev.com/community/files/file/3-intersect-engine/?do=download). Save it somewhere on your machine.

------------

### Step 5: Extract the Intersect Beta 4 archive
Extract the Intersect Beta 4.5 files on top of your current Intersect Beta 4 installation. Replace/overwrite any files that already exist.
![OverwriteBeta3](http://www.ascensiongamedev.com/resources/filehost/01f3e2c55deb69df8bbc56073e82f2d8.gif)

------------

### You're Done!
You can now launch your server and continue playing or creating your MMO!
