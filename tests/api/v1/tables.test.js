const server = require('../../../server/index');
const request = require('supertest');

afterEach(() => {
  server.close();
});

describe('tables', () => {
  describe('#index', () => {
    test('returns all tables', async () => {
      const response = await request(server).get('/api/v1/tables');
      const expectedResponse = {
        "links": {
          "self": "http://localhost:3000/api/v1/tables"
        },
        "data": [{
          "type": "tables",
          "id": "1",
          "attributes": {
            "name": "First table",
            "seats-count": 10
          }
        }, {
          "type": "tables",
          "id": "2",
          "attributes": {
            "name": "Second table",
            "seats-count": 5
          }
        }]
      }

      expect(response.status).toEqual(200);
      expect(response.type).toEqual('application/vnd.api+json');
      expect(response.body).toEqual(expectedResponse);
    });
  });
});
