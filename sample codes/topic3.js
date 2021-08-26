# Topic 3

## Aggregate
db.movies.aggregate([
	{$group: { _id: "$genres", count: {$sum: 1}}}
	])

## Activitiy: Aggregate
use population
db.population.find()
db.population.aggregate([
	{$group:  {_id:{Age:"$Age",Year:"$Year"}, count:{$sum:"$Population"}}}
	])

## Data Processing Pipeline
db.movies.aggregate([
	{$match: {year: {$gte: 2000} }},
	{ $group: { _id: "$year", count: {$sum: 1}}}
	])


## Activity: Data Processing Pipeline
db.population.aggregate([
	{$match: {Age:"65 to 80+"}},
	{$group:  {_id:{Age:"$Age",Year:"$Year"}, count:{$sum:"$Population"}}}
	])


## $lookup
db.backers.aggregate([{ 
 $lookup: {
  from: 'addresses',
  localField: 'user_id',
  foreignField: 'user_id',
  as: 'address'
 }}
 ]);

## $unwind
db.backers.aggregate([{ 
 $lookup: {
  from: 'addresses',
  localField: 'user_id',
  foreignField: 'user_id',
  as: 'address'
 }},
  {
   $unwind: "$address"
  }
 ]);

## $addFields
db.backers.aggregate([{ 
 $lookup: {
  from: 'addresses',
  localField: 'user_id',
  foreignField: 'user_id',
  as: 'address'
 }},
  {
   $unwind: "$address"
  },
  {
  $addFields: {
   "state": "$address.state",
  }}
 ]);

## $poject
db.backers.aggregate([{ 
 $lookup: {
  from: 'addresses',
  localField: 'user_id',
  foreignField: 'user_id',
  as: 'address'
 }},
  {
   $unwind: "$address"
  },
  {
  $addFields: {
   "state": "$address.state",
  }},
  {$project:{_id:0, state:1,user_id:1}}
 ]);

## $group
db.backers.aggregate([{ 
 $lookup: {
  from: 'addresses',
  localField: 'user_id',
  foreignField: 'user_id',
  as: 'address'
 }},
  {
   $unwind: "$address"
  },
  {
  $addFields: {
   "state": "$address.state",
  }},
  {$project:{_id:1, state:1,user_id:1}},
  {$group: { _id: {State:"$state"}, Count: {$sum: 1}}}
 ]);
