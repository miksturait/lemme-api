const database = jest.mock('../../../database');

const server = require('../../../server/index');
const request = require('supertest');

const Table = require('../../../Table');

afterEach(() => {
  server.close();
});

describe('tables', () => {
  describe('#index', () => {
    test('returns all tables', async () => {
      const firstTable = await Table.create({
        "name": "First table",
        "seatsCount": 10
      });

      const secondTable = await Table.create({
        "name": "Second table",
        "seatsCount": 5
      });
      
      const response = await request(server).get('/api/v1/tables');
      const expectedResponse = {
        "links": {
          "self": "http://localhost:3000/api/v1/tables"
        },
        "data": [{
          "type": "tables",
          "id": `${firstTable.id}`,
          "attributes": {
            "name": "First table",
            "seats-count": 10
          }
        }, {
          "type": "tables",
          "id": `${secondTable.id}`,
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
