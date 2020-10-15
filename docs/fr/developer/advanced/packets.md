# Creating New Packets

Data sent between the client, editor, and server are sent as packets. Packets are defined in Intersect.Core/Networking/Packets.

Packets are stored in the Client/Editor/Server folders based on sender. For example the login packet sent from the client will be in the client folder.

Creating new packets are as simple as creating new classes in those folders that inherit from CerasPacket and then writing some sending and handling code.


## Sending Packets

The client, editor, and server each have a PacketSender class in the Networking folder. 

In short you need to create an instance of your packet class, and then pass that to the relevant SendPacket function.


## Handling Packets

The client, editor, and server also each have a PacketHandler class in the Networking folder.

You will need to create a HandlePacket function that accepts the new packet class you created.



Once you've created a new packet class, written the code to send the packet, and written the handler you're done! Easy right?

