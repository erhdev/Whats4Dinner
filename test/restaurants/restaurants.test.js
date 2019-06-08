// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../../controllers/api_controllers");

describe("GET /", () => {
    test("It should respond with all restaurants and categories", async () => {
        const res = await request(app).get("/");
        expect(res.body[0]).toHaveProperty("id");
        expect(res.body[0]).toHaveProperty("restaurant_name");
        expect(res.body[0]).toHaveProperty("restaurant_category");
        expect(res.statusCode).toBe(200);
    });
});

