import mongoose from "mongoose";

// Define the schema for the movies collection
const movieSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	genre: { type: String, required: true },
	money: {
		type: mongoose.Decimal128,
		required: true,
		min: 0,
		validate: (v) => v > 0,
	},
	rating: { type: Number, required: true, min: 0, max: 10 },
});

// Create a model from the schema
const Movies = mongoose.model("Movies", movieSchema);
