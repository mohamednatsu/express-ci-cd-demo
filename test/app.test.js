const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
       let server;

       beforeAll((done) => {
              server = app.listen(0, () => { // Use 0 to get a random available port
                     done();
              });
       });

       afterAll((done) => {
              server.close(done);
       });

       it('should return welcome message', async () => {
              const res = await request(app).get('/');
              expect(res.statusCode).toEqual(200);
              expect(res.body).toHaveProperty('message');
       });
});