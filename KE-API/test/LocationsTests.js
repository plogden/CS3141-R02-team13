const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

const requester = request.agent(app);

describe("Locations Requests", function () {
	describe("GET /locations", function () {
		it("can get list of all locations", async function () {
			const response = await requester.get(`/locations`);

			console.log(response.body);

			expect(response.status).to.eq(200);
		});
	});
});
