const request = require('supertest');
const app = require('../../app');
const {mongoConnect, mongoDisconnect} = require('../../services/mongo');

describe('Launches API tests', ()=> {
  beforeAll(async () => {
    await mongoConnect;
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe('Test GET /launches', () => {  
    test('It should respond with 200 success', async () => {
      const response = await request(app).get('/launches').expect('Content-Type', /json/).expect(200);
      //expect(response.statusCode).toBe(200);
    });
  });
  
  describe('Test POST /launches', () => {
    const completeLaunchData = {
      mission: 'Mission-101',
      rocket: 'GSLV-16D',
      target: 'Kepler-62 f',
      launchDate: 'January 4, 2028',
    };
  
    const LaunchDataWithoutDate = {
      mission: 'Mission-101',
      rocket: 'GSLV-16D',
      target: 'Kepler-62 f',    
    };
  
    const launchDataWithInvalidDate = {
      mission: 'Mission-101',
      rocket: 'GSLV-16D',
      target: 'Kepler-62 f',
      launchDate: 'something',
    };
  
    test('It should respond with response 201 created', async () => {
      const response = await request(app).post('/launches').send(completeLaunchData).expect('Content-Type', /json/).expect(201);
  
      const requestDate = new Date(completeLaunchData.launchDate).valueOf();
  
      const responseDate = new Date(response.body.launchDate).valueOf();
  
      expect(responseDate).toBe(requestDate);
  
      expect(response.body).toMatchObject(LaunchDataWithoutDate);
  
    });
  
    test('It should catch missing required properties', async() => {
      const response = await request(app).post('/launches').send(LaunchDataWithoutDate).expect('Content-Type', /json/).expect(400);
  
      expect(response.body).toStrictEqual({
        error: 'Missing one of the required property.',
      });
    });
  
  
    test('It should catch invalid dates', async() => {
      const response = await request(app).post('/launches').send(launchDataWithInvalidDate).expect('Content-Type', /json/).expect(400);
  
      expect(response.body).toStrictEqual({
        error: 'Invalid Date.',
      })
    });
  });
  
});

