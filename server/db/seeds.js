use bucket;
db.dropDatabase();

db.bucket.insertMany([
  {
    name: "See London",
    description: "See all the tourist things in London",
    date:"2016/01/01"
  },
  {
    name:"Climb a Mountain",
    description: "Find a Munro to climb",
    date:"2020/12/12"
  }
]);
