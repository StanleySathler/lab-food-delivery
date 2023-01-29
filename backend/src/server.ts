import fastify from 'fastify';
import cors from '@fastify/cors';

import productRouter from './service/product/router';

export const buildServer = () => {
  const server = fastify({
    logger: true,
  });

  server.register(cors);

  server.register(productRouter, { prefix: '/product' });

  return server;
};
