# Topic 1

## Activity: MongoDB Shell
mongodbsh
use db1
use db2
show dbs 
db.dropDatabase()

## Import Data
mongoimport --db blog --collection recipes --file recipes.json --jsonArray --drop
mongoimport --db blog --collection users --file users.json --jsonArray --drop
mongoimport --db population --collection population --file population.csv --type csv --headerline --drop

## Access MongoDB Shell
mongosh

## Activity: Importing Data
mongoimport --db movies --collection movies --file movies.json --jsonArray --drop
mongoimport --db funding --collection backers --file backers.csv --type csv --headerline --drop
mongoimport --db funding --collection rewards --file rewards.csv --type csv --headerline --drop
mongoimport --db funding --collection addresses --file addresses.csv --type csv --headerline --drop

