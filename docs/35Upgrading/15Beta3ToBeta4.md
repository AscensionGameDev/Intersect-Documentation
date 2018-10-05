---
title: Beta 3 -> Beta 4
---

<div class="alert alert-danger">
  <strong>Stop!</strong> Intersect upgrades must be done in order! You cannot skip from Alpha 1.X or Beta 1 to Beta 3. Make sure you are using Intersect Beta 3 before following the instructions in this guide.
</div>

## Intersect Beta 4 Upgrade Instructions

### Step 1: Make a backup of your game!
Nothing will go wrong but it's better to have a backup just in case. Copy your Intersect Beta 3 folder and paste it somewhere else for safe keeping.
![MakeABackup](http://www.ascensiongamedev.com/resources/filehost/95a01605b697f2d9f92a2453b6d0dd7a.gif)

------------

### Step 2: Change Port to 5400
If you are using the default Intersect port from before Beta 4 (port 4500) then you need to switch it to something else. Open the following files and change 4500 to 5400.
* Client/Resources/Config.xml
* Editor/Resources/Config.xml
* Server/Resources/Config.xml
![ChangePort](http://www.ascensiongamedev.com/resources/filehost/746150ad6289065e54373f1f26311ef2.gif)

------------

### Step 3: Add new Options to Server Config
Add the following lines to your Server/Resources/Config.xml inside the \<Player\>\</Player\> block.
~~~~
    <MaxCharacters>1</MaxCharacters>
    <ItemDropChance>0</ItemDropChance>
~~~~
![NewServerOptions](http://www.ascensiongamedev.com/resources/filehost/e2fa55dc1156c04e0103bae2a79970b7.gif)

------------

### Step 4: Delete the Following Files
If the following files exist then delete them. We have made a ton of changes to our language and color xmls. Deleting this files will allow Intersect to generate new ones for you. 
* Server/Resources/Colors.Xml
* Client/Resources/languages/Client.English.xml
* Editor/Resources/languages/Editor.English.xml
* Server/Resources/languages/Server.English.xml

If you have translated your game, then move your files to a safe location and compare with the new Beta 4 versions to find the differences.

------------

### Step 5: Download Required Beta 4 Resources
[Download these required Beta 4 resources.](http://www.ascensiongamedev.com/resources/filehost/f888ae35eb4ede32e3471e538401d9b1.zip) Extract them into both your Client/Resources and Editor/Resources folders.
![ExtractingResources](http://www.ascensiongamedev.com/resources/filehost/6ff20ca2fbdbf2c706a44ff559bdcd95.gif)

------------

### Step 6: Download Intersect Beta 4
Download Intersect Beta 4.2 [here](https://www.ascensiongamedev.com/community/files/file/3-intersect-engine/?do=download&r=560&version=82). Save it somewhere on your machine.

------------

### Step 7: Extract the Intersect Beta 4 archive
Extract the Intersect Beta 4 files on top of your current Intersect Beta 3 installation. Replace/overwrite any files that already exist.
![OverwriteBeta3](http://www.ascensiongamedev.com/resources/filehost/01f3e2c55deb69df8bbc56073e82f2d8.gif)

------------

### Step 8: Run Database Migration Tool
Open your Intersect Server folder. Run the Intersect Migration Tool. Follow the prompts to upgrade your database.
![RunMigration](http://www.ascensiongamedev.com/resources/filehost/354c5bd59213b5ddb4968801b1b02661.gif)

------------

### You're Done!
If you're Intersect folder was called Intersect Engine Beta 3 or Intersect Beta 3.1 we recommend renaming it to Intersect Engine Beta 4 so you don't get confused about what version of the engine you are running later. You can now launch your server and continue playing or creating your MMO!
