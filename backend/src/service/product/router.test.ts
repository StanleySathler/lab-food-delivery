import { FastifyInstance } from 'fastify';
import { buildServer } from '../../server';

let app: FastifyInstance;

beforeAll(async () => {
  app = buildServer();
});

afterAll(async () => {
  await app.close();
});

describe('List products', () => {
  it('Should respond 200 and list all projects', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/product',
    });

    expect(response.json()).toStrictEqual([
      { id: '1', name: 'Cup Cake' },
      { id: '2', name: 'Donut' },
    ]);
  });
});
