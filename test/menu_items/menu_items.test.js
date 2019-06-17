/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
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

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const db = require('../../models');

const { expect } = chai;

let request;

// Setting up the chai http plugin
chai.use(chaiHttp);


describe('GET /menu_item/:name', () => {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find the first menu item', (done) => {
    // Add some examples to the db to test with
    db.Menu_Item.bulkCreate([
      { menu_item: 'First' },
      { menu_item: 'Second' },
    ]).then(() => {
      // Request the route that returns all examples
      request.get('/menu_item/First').end((err, res) => {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody.message)
          .to.be.an('object')
          .that.includes({ menu_item: 'First' });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
  // it("should return an error", function (done) {
  //     // Add some examples to the db to test with
  //     db.Menu_Item.bulkCreate([
  //         { menu_item: "First" },
  //         { menu_item: "Second" },
  //         { menu_item: "_abc"}
  //     ]).then(function () {
  //         // Request the route that returns all examples
  //         request.get("/menu_item/_abc").end(function (err, res) {
  //             var responseStatus = res.status;
  //             var responseBody = res.body;
  //             console.log(res.body);

  //             // Run assertions on the response

  //             expect(err).to.not.be.null;

  //             expect(responseStatus).to.equal(500);

  //             // expect(responseBody.message)
  //             //     .to.be.an("object")
  //             //     .that.includes({ menu_item: "First" });

  //             // The `done` function is used to end any asynchronous tests
  //             done();
  //         });
  //     });
  // });
});

describe('POST /api/menu_item/:restaurant_id', () => {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save a menu item', (done) => {
    // Create an object to send to the endpoint
    db.Restaurant.bulkCreate([
      { restaurant_name: 'First Restaurant', restaurant_category: 'First Cateogry' },
      { restaurant_name: 'Second Restaurant', restaurant_category: 'Second Cateogry' },
    ]).then(() => {
      const reqBody = {
        menu_item: 'menuItem',
        RestaurantId: 1,
      };

      // POST the request body to the server
      request
        .post('/api/menu_item/1')
        .send(reqBody)
        .end((err, res) => {
          // console.log("KEVIN - ", res.body);
          const responseStatus = res.body.status;
          const responseBody = res.body.result;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('object');

          // The `done` function is used to end any asynchronous tests
          done();
        });
    });
  });
});
