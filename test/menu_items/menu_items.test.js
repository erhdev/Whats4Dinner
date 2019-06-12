// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const express = require('express');
// const apiRouter = require('../../controllers/api_controllers');
// const should = chai.should();
// chai.use(chaiHttp);

// describe("GET /menu_item/:id", () => {
//     let app;
//     beforeEach(() => {
//         app = express();
//         app.use('/menu_item/:id', apiRouter);
//     });
//     it("It should respond with an object and a 200 status", done => {
//         chai.request(app)
//             .get('/menu_item/:id')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('Object');
//                 done();
//             });
//     });
// });