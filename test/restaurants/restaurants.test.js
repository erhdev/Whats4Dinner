//process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const db = require('../../models');
const express = require('express');
const apiRouter = require('../../controllers/api_controllers');
const should = chai.should();
const expect = chai.expect;
const server = require('../../server');
// Setting up the chai http plugin
chai.use(chaiHttp);

let request;

describe("GET /", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should find all restaurants", function (done) {
        // Add some examples to the db to test with
        console.log("HERE");
        db.Restaurant.bulkCreate([
            { restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" },
            { restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" }
        ]).then(db.Menu_Item.bulkCreate([
            { menu_item: "First item"},
            { menu_item: "Second item"}
        ])).then(function () {
            // Request the route that returns all examples
            request.get("/").end(function (err, res) {
                console.log(res);
                var responseStatus = res.status;
                var responseBody = res.body.restaurants;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an("array")
                    .that.has.lengthOf(2);

                expect(responseBody[0])
                    .to.be.an("object")
                    .that.includes({ restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" });

                expect(responseBody[1])
                    .to.be.an("object")
                    .that.includes({ restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

// describe("GET /", () => {
//     let app;
//     beforeEach(() => {
//         app = express();
//         app.use('/', apiRouter);
//     });
//     it("It should respond with an object and a 200 status", done => {
//         chai.request(app)
//             .get('/')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('Object');
//                 done();
//             });
//     });
// });

// describe("GET /restaurant/:id", () => {
//     let app;
//     beforeEach(() => {
//         app = express();
//         app.use('/restaurant/:id', apiRouter);
//     });
//     it("It should respond with an object and a 200 status", done => {
//         chai.request(app)
//             .get('/restaurant/:id')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('Object');
//                 done();
//             });
//     });
// });

// describe("GET /category/:category", () => {
//     let app;
//     beforeEach(() => {
//         app = express();
//         app.use('/category/:category', apiRouter);
//     });
//     it("It should respond with an object and a 200 status", done => {
//         chai.request(app)
//             .get('/category/:category')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('Object');
//                 done();
//             });
//     });
// });
