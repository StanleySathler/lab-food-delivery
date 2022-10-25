import { buildServer } from './server';

const server = buildServer();

const startServer = async () => {
  try {
    await server.listen({ port: Number(process.env.PORT), host: '::' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();
