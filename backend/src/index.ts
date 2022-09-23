import fastify from 'fastify';
import productRouter from './service/product/router';

const server = fastify({
  logger: true,
});

server.register(productRouter, { prefix: '/product' });

const startServer = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();
