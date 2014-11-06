Informatie voor het bewerken van de MongoDB
--------------------------------------------
Systeem:	De mongo daemon is mongod en draait niet standaard op windows
			Mongo heeft C:\data\db nodig om te werken, mappen bestaan niet
			
GUI:		Robotmongo

CLI:		mongo
			use databanknaam		gebruikt en maakt een databank in de CLI
			db.vakantie.find()		select tabel vakantie
			db.vakantie.insert()	insert, json object als parameter
			db.dropDatabase()