import { FastifySchema } from 'fastify';

const productResourceSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const listProductsSchema: FastifySchema = {
  response: {
    200: {
      ...productResourceSchema,
    },
  },
};
