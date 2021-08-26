# Topic 2

## Insert Single Docuemnt
use inventory
doc = { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
db.inventory.insertOne(doc)
db.inventory.find( { item: "canvas" } )

## Activity: Insert Single Docuemnt
doc = {
    "title": "Chicken Tacos",
    "description": "Classic Mexican tacos",
    "cook_time": 20
}
db.recipe.insertOne(doc)
db.recipe.find( { "title": "Chicken Tacos" } )

## Insert Multiple Documents
doc =[
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]
db.inventory.insertMany(doc)
db.inventory.find()

## Activity: Insert Multiple Documents
use movies
db.my_movies.insertMany([
   { title: "Birds of Prey", genres: ["Crime", "Action"], year: 2020 },
   { title: "Bad Boys for Life", genres: ["Thriller", "Crime"], year: 2020 },
   { title: "Titanic", genres: ["Drama", "Disaster"], year: 1997 }
])
db.my_movies.find()

## Read/Find Documents
db.inventory.find({status:"B"})

db.movies.find({genres: [“Comedy”, “Superhero”]})
db.movies.find({genres:“Drama”})
db.population.find({Age:"65 to 80+", Year: {$gt:2010} })

db.population.createIndex({"Age":1})

## Projection
db.inventory.find({status:"B"},{_id:0})
db.inventory.find({status:"B"},{qty:1,status:1,_id:0})
db.movies.find({year: 2000}, {title: 1})

## Limiting Query Records
db.movies.find({year:2010}).limit(2)

## Skip Query Records
db.movies.find().limit(10).skip(10)

## Sorting Query Records
db.movies.find({genres:'Crime'}).limit(10).sort({"year":1})
db.recipes.find({}, {"title": 1}).sort({"rating_avg": -1}).limit(4)
db.recipes.find({"tags" : "mexican"}, {"title": 1}).sort({"rating_avg": -1}).limit(4)
db.recipes.find({"likes": { $all : [1] }}, {"title" : 1}).sort({"title": 1})

## Find Missing Values
db.movies.find({title: null})


## Activity: Find/Read Documents
db.movies.find()
db.movies.find({genres:"Crime"}).limit(5)
db.movies.find({year:1977})
db.movies.find({title:"Titanic"},{title:1})
db.movies.find({genres:"Thriller"},{title:1,year:1}).limit(10).sort({"year":1})

## Comparison Operators
db.inventory.find({status: { $in: [ "A", "D" ]}})
db.inventory.find( { "size.h": { $lt: 15 } } )
db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } )

## Activity: Comparison Operators
db.movies.find({year:{$lt: 1995}})
db.movies.find({year:{$gt: 2000,$lt:2010}})
db.movies.find({year:{$in: [1997,2001]}})
db.movies.find({genres:{$in:["Crime","Action"]}})

## Activity: Logical Operators
db.movies.find({$or:[{year:{$gt:1995,$lt:2000}},{year:{$gt:2005,$lt:2010}}]} )
db.movies.find({$and:[{title:"Titanic"},{year:{$gt:1995}}]} )

## Activity: Evaluation Operators
db.movies.find( { year: { $mod: [ 5, 0 ] } } )
db.movies.find({title:{$regex: /^Tit/}})
db.movies.find( { cast: { $size: 4 }})


## Update Single Document
db.inventory.updateOne(
   {item: 'journal'},
   {$set: { qty: 30,size: { h: 15, w: 19, uom: "cm" }}}
)
db.inventory.find({item:"journal"})

## Update Multiple Documents
db.inventory.updateMany(
   { },
   { $set: { status: "B" } }
)
db.inventory.find()

## Replace Document
db.inventory.replaceOne(
   {item: "journal"},
   {item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" }
)

## Activity: Update Documents
use population
db.population.updateMany(
    { Age:{$lte:17}},
    { $set: { Age: "00 to 17" } }
    )
db.population.updateMany(
    { Age:{$gt:64}},
    { $set: { Age: "65 to 80+" } }
    )
db.population.updateMany(
    { Age:{$gte:18}, Age:{$lte: 64}},
    { $set: { Age: "18 to 64" } }
    )

## Delete Document 
db.inventory.remove(
   {item:"journal"}
   )
db.inventory.remove(
   {item:{$regex:"^planner"}}
   )


## Activity: Delete Documents
db.movies.remove(
   {year: {$lt:2010}}
)
db.movies.remove(
   {genres: "Comedy"}
)

