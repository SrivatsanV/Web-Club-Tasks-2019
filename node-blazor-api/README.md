# Node Api for the [Blazor_App](https://blazorapp231.z30.web.core.windows.net/fetchdata)

### Setup
* Initialised the api folder by ```npm init```.
* ```npm install express dotenv mongoose cors``` to install the required the packages.
* Initialised a ```index.js``` page where the routes are being setup.
* ```models/db.js``` containes the schema for our database.
* Initialised the database by using [Cloud Atlas](https://www.mongodb.com/cloud/atlas) and import the data from the csv to the cluster by using  
```mongoimport --host Cluster101-shard-0/cluster<name>.mongodb.net:27017,cluster<name>.mongodb.net:27017,cluster<name>.mongodb.net:27017 --ssl --username <username> --password <password> --authenticationDatabase admin --db majestic_million --collection million --type csv --file majestic_million.csv --maintainInsertionOrder --columnsHaveTypes --fields GlobalRank.string(),TldRank.string(),Domain.string(),TLD.string(),RefSubNets.string(),RefIPS.string(),IDN_Domain.string(),IDN_TLD.string(),PrevGlobalRank.string(),PrevTldRank.string(),PrevRefSubNets.string(),PrevRefIPs.string()```
* Initialised a .env file which contains the variable ```DB_CONNECTION``` which stored the URI for database connection.
* Used the above variable to connect to mongoDB cluster using mongoose.


### Usage
* This api is hosted online : https://million-api-101.herokuapp.com - this simply displays ```index```
* To fetch records : https://million-api-101.herokuapp.com/<lower-limit>/<upper-limit> where <lower-limit> and <upper-limit> are numbers in range 0 - 1000000

PS : Only 14 records are being fetched from this api at a given time in the [Blazor_App](https://blazorapp231.z30.web.core.windows.net/fetchdata)
