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

describe("GET /", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should find all restaurants", function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" },
            { restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" }
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/").end(function (err, res) {
                //console.log(res.body);
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody.message)
                    .to.be.an("array")
                    .that.has.lengthOf(2);

                expect(responseBody.message[0])
                    .to.be.an("object")
                    .that.includes({ restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" });

                expect(responseBody.message[1])
                    .to.be.an("object")
                    .that.includes({ restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe("GET /restaurant/:id", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should find the first restaurant", function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" },
            { restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" }
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/restaurant/1").end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an("object");

                expect(responseBody.message)
                    .to.be.an("object")
                    .that.includes({ restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
    it("should find the second restaurant", function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" },
            { restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" }
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/restaurant/2").end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an("object");

                expect(responseBody.message)
                    .to.be.an("object")
                    .that.includes({ restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe("GET /category/:category", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should find all restaurants with the seafood category", function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: "First Restaurant", restaurant_category: "italian" },
            { restaurant_name: "Second Restaurant", restaurant_category: "seafood" },
            { restaurant_name: "Third Restaurant", restaurant_category: "seafood" }
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/category/seafood").end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an("object");

                expect(responseBody.message)
                    .to.be.an("array")
                    .that.has.length(2)
                
                expect(responseBody.message[0])
                    .to.be.an('object')
                    .that.includes({ restaurant_name: "Second Restaurant", restaurant_category: "seafood" });

                expect(responseBody.message[1])
                    .to.be.an('object')
                    .that.includes({ restaurant_name: "Third Restaurant", restaurant_category: "seafood" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});


