const server = require("../server")
const request = require("supertest")
const cheerio = require("cheerio")

test ("tests are running", () => {
  expect(2).toBeGreaterThan(1)
})

test ("/ exists", done => {
  request(server)
  .get("/")
  .end((err, res) => {
      expect(res.status).toBe(200)
      done()
  })
})
