import { buildServer } from './server';

const server = buildServer();

console.log('> hihi ', process.env);

const startServer = async () => {
  try {
    await server.listen({ port: Number(process.env.PORT) });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();
