const db = require("../models");
const { Op } = require("sequelize");

const LocationController = {
	// Returns an array of location objects in the db
	async getLocations(req, res) {
		const category = req.query.category || "";
		const search = req.query.search || "";

		const filter = {
			[Op.and]: [{ name: { [Op.substring]: search } }],
		};

		let typeFilter = {};
		if (category) {
			typeFilter = { name: category };
		}

		const locations = await db.Locations.findAll({
			where: filter,
			raw: true,
			logging: console.log,
			include: [
				{
					model: db.Location_Types,
					where: typeFilter,
					attributes: [["name", "category"]],
				},
			],
		});

		return res.status(200).json({
			status: "success",
			locations,
		});
	},

	// Returns location details
	async getLocation(req, res) {
		const id = req.query.id || "";

		if (!id) {
			return res.status(400).json({
				message: "location id required",
			});
		}

		const location = await db.Locations.findOne({
			where: { id },
			raw: true,
			logging: console.log,
			include: [
				{
					model: db.Location_Types,
					attributes: [["name", "category"]],
				},
			],
		});

		return res.status(200).json({
			status: "success",
			location,
		});
	},
};

module.exports = LocationController;
