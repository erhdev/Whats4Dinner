const chai = require('chai');
const chaiHttp = require('chai-http');
const express = require('express');
const apiRouter = require('../../controllers/api_controllers');
const should = chai.should();
chai.use(chaiHttp);

describe("GET /", () => {
    let app;

    beforeEach(() => {
        app = express();
        app.use('/', apiRouter);
    });

    it("It should respond with an object", done => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                done();
            });
    });
});

describe("GET /restaurant/:id", () => {
    let app;

    beforeEach(() => {
        app = express();
        app.use('/restaurant/:id', apiRouter);
    });

    it("It should respond with an object", done => {
        chai.request(app)
            .get('/restaurant/:id')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                done();
            });
    });
});
