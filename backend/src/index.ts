import { buildServer } from './server';

const server = buildServer();

const startServer = async () => {
  try {
    await server.listen({ port: Number(process.env.PORT) || 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();
