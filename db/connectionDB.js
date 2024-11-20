import mongoose from "mongoose";

const connection = async (database_url) => {
	try {
		await mongoose.connect(database_url);
		console.log("connetion");
	} catch {
		console.error("here is an error");
	}
};

export default connection;
