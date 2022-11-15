const db = require("../models");

const LocationController = {
	// Returns an array of location objects in the db
	async getLocations(req, res) {
		const locations = await db.Locations.findAll({ raw: true });

		console.log(locations);

		return res.status(200).json({
			status: "success",
			locations,
		});
	},
};

module.exports = LocationController;
