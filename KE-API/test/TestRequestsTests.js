const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

const requester = request.agent(app);

let testUser = null;
let testUserId = null;

describe("Test Requests", function () {
	describe("/status", function () {
		it("returns success when the app is running", async function () {
			const response = await requester.get(`/status`);

			expect(response.status).to.eq(200);
		});
	});
	describe("/testdb", function () {
		it("returns success when the db is connected", async function () {
			const response = await requester.get(`/testdb`);

			expect(response.status).to.eq(200);
			expect(response.body.testData.length).to.eq(2);
		});
	});
});
