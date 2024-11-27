import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb"; //mongdoDb method to convert a string into an objectId for the _id


const router = express.Router(); //an instance of Express Router

router.get("/", async (req, res) => {
  try{
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);

  if(!results){
    res.status(500).send("Something went wrong")
  }

  }catch(err){
    console.error(err)
  }
});

router.get("/:id", async (req, res) => {
  try{
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) {
    res.send("Not found".status(404));
  } else {
    res.send(result).status(200);
  }
}catch(err){
  console.error(err);
}
});

router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);

    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);


    if(!result.modifiedCount === 0){
      return res.status(404).send("Record not found");
    }

    res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating record");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = await db.collection("records");

    let result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      return res.status(404).send("Record not found");
    }

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;