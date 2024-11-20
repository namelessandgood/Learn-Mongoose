import express from "express";
import connection from "./db/connectionDB.js";
const app = express();
const port = process.env.PORT || 8000;
const database_url =
	process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";
app.listen(port, () => {
	console.log(`new port is listen ${port}`);
});

await connection(database_url);
