const request = require('supertest');
const { app } = require('../src/server');

describe('[POST] /upload', () => {
  test('should return message OK', () => {
    return request(app)
      .post('/upload')
      .set({ Accept: 'application/json', email: 'some@one.com', user_key: 'anyth1ng' })
      .attach('video', 'C:/Users/Alen/Desktop/sample.avi')
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
