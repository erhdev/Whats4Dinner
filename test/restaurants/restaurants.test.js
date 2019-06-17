/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let db = require('../../models');

let expect = chai.expect;

let request;

// Setting up the chai http plugin
chai.use(chaiHttp);

// //process.env.NODE_ENV = 'test';
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const db = require('../../models');
// const express = require('express');
// const apiRouter = require('../../controllers/api_controllers');
// //const should = chai.should();
// const expect = chai.expect;
// const server = require('../../server');
// // Setting up the chai http plugin
// chai.use(chaiHttp);

// let request;

describe('GET /', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it('should find all restaurants', function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: 'First Restaurant', restaurant_category: 'First Cateogry' },
            { restaurant_name: 'Second Restaurant', restaurant_category: 'Second Cateogry' },
        ]).then(function () {
            // Request the route that returns all examples
            request.get('/').end(function (err, res) {
                let responseStatus = res.status;
                let responseBody = res.text;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody).to.not.be.empty;

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe('GET /restaurant/:name', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it('should find the first restaurant', function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: 'First', restaurant_category: 'FirstCateogry' },
            { restaurant_name: 'Second', restaurant_category: 'SecondCateogry' },
        ]).then(function () {
            // Request the route that returns all examples
            request.get('/restaurant/First').end(function (err, res) {
                let responseStatus = res.status;
                let responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an('object');

                expect(responseBody.message)
                    .to.be.an('object')
                    .that.includes({ restaurant_name: 'First', restaurant_category: 'FirstCateogry' });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
    it('should find the second restaurant', function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: 'FirstRestaurant', restaurant_category: 'FirstCateogry' },
            { restaurant_name: 'SecondRestaurant', restaurant_category: 'SecondCateogry' },
        ]).then(function () {
            // Request the route that returns all examples
            request.get('/restaurant/SecondRestaurant').end(function (err, res) {
                let responseStatus = res.status;
                let responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an('object');

                expect(responseBody.message)
                    .to.be.an('object')
                    .that.includes({ restaurant_name: 'SecondRestaurant', restaurant_category: 'SecondCateogry' });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe('GET /category/:category', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it('should find all restaurants with the seafood category', function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: 'First Restaurant', restaurant_category: 'italian' },
            { restaurant_name: 'Second Restaurant', restaurant_category: 'seafood' },
            { restaurant_name: 'Third Restaurant', restaurant_category: 'seafood' },
        ]).then(function () {
            // Request the route that returns all examples
            request.get('/category/seafood').end(function (err, res) {
                let responseStatus = res.status;
                let responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an('object');

                expect(responseBody.message)
                    .to.be.an('array')
                    .that.has.length(2);

                expect(responseBody.message[0])
                    .to.be.an('object')
                    .that.includes({ restaurant_name: 'Second Restaurant', restaurant_category: 'seafood' });

                expect(responseBody.message[1])
                    .to.be.an('object')
                    .that.includes({ restaurant_name: 'Third Restaurant', restaurant_category: 'seafood' });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe('GET /restaurantArr', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it('should find all restaurants', function (done) {
        // Add some examples to the db to test with
        db.Restaurant.bulkCreate([
            { restaurant_name: 'First Restaurant', restaurant_category: 'First Cateogry' },
            { restaurant_name: 'Second Restaurant', restaurant_category: 'Second Cateogry' },
        ]).then(function () {
            // Request the route that returns all examples
            request.get('/restaurantArr').end(function (err, res) {
                let responseStatus = res.status;
                let responseBody = res.text;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody).to.not.be.empty;

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe('POST /api/restaurant', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it('should save an example', function (done) {
        // Create an object to send to the endpoint
        let reqBody = {
            restaurant_name: 'post_restaurant',
            restaurant_category: 'post_category',
        };

        // POST the request body to the server
        request
            .post('/api/restaurant')
            .send(reqBody)
            .end(function (err, res) {
                let responseStatus = res.body.status;
                let responseBody = res.body.result;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an('object')
                    .that.includes(reqBody);

                // The `done` function is used to end any asynchronous tests
                done();
            });
    });
});
