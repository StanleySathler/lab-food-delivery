import fastify from 'fastify';
import productRouter from './service/product/router';

export const buildServer = () => {
  const server = fastify({
    logger: true,
  });

  server.register(productRouter, { prefix: '/product' });

  return server;
};
