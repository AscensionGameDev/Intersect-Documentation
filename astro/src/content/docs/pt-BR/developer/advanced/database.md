---
title: Database
---


Intersect has two databases, one that stores game data such as items, maps, resources, events, etc and another that stores all data related to player accounts.

The tables in both databases are automatically generated based on contexts. The player context and game context are defined in the following source files:
 - Intersect.Server/Database/GameData/GameContext.cs
 - Intersect.Server/Database/PlayerData/PlayerContext.cs

Contexts consist DBSets which end up being tables. DBSets are created from C# Classes.

The context classes also define relationships between the tables. You can learn more about that from the Entity Framework Core documentation if interested.


## Database Fields

Fields are automatically created from public properties in a class much like Tables are automatically created from Classes within DBSets in a context.

If you look at the Users class in the server (Interect.Server/Database/PlayerData/User.cs) you will see fields for the user's id, name, password, salt, email, and more.

Please note, Entity Framework can only handle basic types (integers, strings, blobs, and references to other classes that exist as a DBSet). Due to these limitations we mark some complex fields as `[NotMapped]` and then have a secondary string field that converts the complex field to json. For an example of this see User.Power and User.PowerJson. Notice how the PowerJson property has a column name property so it is stored in the database in the Power field.


## Adding Fields

In order to add a field to the database create a new public property in a class that is stored within Entity Framework. In this example I am going to add a field for each User that tracks their last used ip address.

I added the following property to the User class:
```
public string LastUsedIp { get; set; }
```

## Creating a Migration

After making changes to Entity Framework classes you will need to create a migration. In order to create the migration there are several setup steps:

- [Set your startup project to Intersect Server, and the build type to NoFody](https://www.ascensiongamedev.com/resources/filehost/13a8de43d24b7595cacb37c5c99c65f1.png)
- [Now build your server. Building with the NoFody configuration will generate a bunch of required dlls.](https://www.ascensiongamedev.com/resources/filehost/73271e21395e697efb06cf7d28f0f14d.png)
- [In VS open a Nuget Package Manager Console. (Tools -> Nuget Package Manager -> Package Manager Console)](https://www.ascensiongamedev.com/resources/filehost/c51298fbaf5e35a654b43c915ab5375f.png)
- [Within the package manager console set your default project to Intersect.Server](https://www.ascensiongamedev.com/resources/filehost/2eea276e85b6258c5b844f392acdfd15.png)

Now you're ready to generate the migration files. Enter the following command into the package manager console:
```
Add-Migration -Context [ContextHere] [InsertMigrationNameHere]
```

Replace `[ContextHere]` with either GameContext or PlayerContext depending on which database you modified.

Replace `[InsertMigrationNameHere]` with a short identifier of what the migration is for.

For example I added a LastUsedId property to the Users class. In this case I would use the following command:
```
Add-Migration -Context PlayerContext AddingLastUsedIpToUsers
```

Your migration should appear as a new [source code file](https://www.ascensiongamedev.com/resources/filehost/500983d59ef1b372947c3c2e9ff5aa47.png). Go ahead and save it.

Now that we're done change the solution configuration from NoFody back to Debug and run your server.

You will be greeted with the [migration prompt](https://www.ascensiongamedev.com/resources/filehost/a0eca1c08ed9ad5b5324ef4502cded49.png).


## Migration Limitations

Due to (current) limitations in Sqlite fields cannot be renamed or removed. We have a few fields that we keep around that are not in use due to these limitations. It is expected that this functionality will someday be available.


## Migrations are one-way

Unfortunately migrations are one-way due to limitations above with Sqlite. If users want to uninstall source modifications that alter the database they will have to use external tools to remove the database fields or revert to a backup before the modification was installed.





