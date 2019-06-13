//process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const db = require('../../models');
const express = require('express');
const apiRouter = require('../../controllers/api_controllers');
//const should = chai.should();
const expect = chai.expect;
const server = require('../../server');
// Setting up the chai http plugin
chai.use(chaiHttp);

let request;

describe("GET /menu_item/:id", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should find the first menu item", function (done) {
        // Add some examples to the db to test with
        db.Menu_Item.bulkCreate([
            { menu_item: "First Item"},
            { menu_item: "Second Item" }
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/menu_item/1").end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody.message)
                    .to.be.an("object")
                    .that.includes({ menu_item: "First Item" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});