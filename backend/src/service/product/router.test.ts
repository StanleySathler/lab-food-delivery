import jwt from 'jsonwebtoken';
import { FastifyInstance } from 'fastify';
import { buildServer } from '../../server';

let app: FastifyInstance;

beforeAll(async () => {
  app = buildServer();
});

afterAll(async () => {
  await app.close();
});

const userHeaders = {
  authorization: `Bearer ${jwt.sign({}, 'my-super-secret')}`,
};

const noTokenHeaders = {};

const invalidTokenHeaders = {
  authorization: `Bearer ${jwt.sign({}, 'wow-hey')}`,
};

describe('List products', () => {
  it('Should respond 401 if user is not logged-in', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/product',
      headers: noTokenHeaders,
    });

    expect(response.statusCode).toBe(401);
    expect(response.json()).toStrictEqual({
      message: 'No token found. Login first.',
    });
  });

  it('Should respond 400 if token is invalid', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/product',
      headers: invalidTokenHeaders,
    });

    expect(response.statusCode).toBe(400);
  });

  it('Should respond 200 and list all projects', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/product',
      headers: userHeaders,
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toStrictEqual([
      { id: '1', name: 'Cup Cake' },
      { id: '2', name: 'Donut' },
    ]);
  });
});
