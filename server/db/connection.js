import { MongoClient , ServerApiVersion } from "mongodb";


const uri = process.env.ATLAS_URI || "mongodb://localhost:27017";

const client = new MongoClient(uri, {

	serverApi: {
		version: ServerApiVersion.v1,
		strict:true,
		deprecationErrors: true,
	},

})


try {
	await client.connect();

	await client.db("admin").command({ ping: 1 });
	console.log(
		"Successfully connected to MongoDB"
	);
} catch(err){
	console.log(err)
}


let db = client.db('employees') //create the DB automatically so no worries if it is not created yet

export default db;