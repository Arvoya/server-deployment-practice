const supertest = require("supertest");
const app = require("../server.js");

const request = supertest(app);

describe("testing the server", () => {
  test("Should responde with 1", async () => {
    let response = await request.get("/subtraction?number1=3&number2=2");
    expect(response.status).toEqual(200);
    expect(response.body.value).toEqual(1);
  });
});
