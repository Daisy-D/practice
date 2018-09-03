const superagent = require("supertest")
const app = require('./app')

function request() {
  return superagent(app.listen())
}
describe("node接口测试", function (done) {
  it("test接口测试文档", function () {
    request().get('/test')
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function (err, res) {
        if (res.data == "hellp wo") {
          done()
        } else {
          done(err)
        }
      })
  })
})