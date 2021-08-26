import pymongo

# Connect to database
client = pymongo.MongoClient("localhost", 27017)
db = client.movies
print(f"The database name is: {db.name}")

# Find documents
query = { "year": { "$gt": 2010 }}
for item in db.movies.find(query):
    print(item["title"])

for item in db.movies.find().sort("year",1).limit(20):
    print(item["year"]," -- ",item["title"])


