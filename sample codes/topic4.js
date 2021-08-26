#Topic 4

## Indexing

db.population.getIndexes()

## Create Index
db.population.createIndex({"Age":1})
db.population.getIndexes()
db.population.find({Age:"65 to 80+" })

## Drop Index
db.population.dropIndexes({"Age":1})
db.population.getIndexes()

## Activity: Indexing

db.population.createIndex({"Year":1})
db.population.getIndexes()
db.population.find({Year: {$gt: 2000}})
db.population.dropIndexes({"Year":1})