const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app).get('./launches').expect('Content-Type', /json/).expect(200);
    //expect(response.statusCode).toBe(200);
  });
});

describe('Test POST /launches', () => {
  test('It should respond with response 201 created', async () => {
    const response = await request(app).post('/launches').send({
      mission: 'Mission-101',
      rocket: 'GSLV-16D',
      target: 'Kepler-186 f',
      launchDate: 'January 4, 2028',
    }).expect('Content-Type', /json/).expect(201);

    expect(response.body).toMatchObject({
      mission: 'Mission-101',
      rocket: 'GSLV-16D',
      target: 'Kepler-186 f',
      launchDate: 'January 4, 2028',
    });

  });

  test('It should catch missing required properties', () => {});
  test('It should catch invalid dates', () => {});
});
