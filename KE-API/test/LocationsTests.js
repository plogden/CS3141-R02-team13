const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

const requester = request.agent(app);

describe("Locations Requests", function () {
	describe("GET /locations", function () {
		it("can get list of all locations", async function () {
			const response = await requester.get(`/locations`);

			expect(response.status).to.eq(200);
			expect(response.body.locations.length).to.gte(10);
		});
		it("can filter locations by category", async function () {
			const response = await requester.get(`/locations?category=Parks`);

			// Check all categories are correct
			let success = true;
			for (location of response.body.locations) {
				if (
					!location["Location_Type.category"].toLowerCase() == "Parks"
				)
					success = false;
			}

			expect(response.status).to.eq(200);
			expect(success).to.eq(true);
		});
		it("can filter locations by search", async function () {
			const search = "falls";
			const response = await requester.get(`/locations?search=` + search);

			// Check search worked
			let success = true;
			for (location of response.body.locations) {
				if (!location.name.toLowerCase().includes(search))
					success = false;
			}

			expect(response.status).to.eq(200);
			expect(success).to.eq(true);
		});
	});
});
