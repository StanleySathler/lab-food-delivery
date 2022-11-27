import jwt from 'jsonwebtoken';
import { FastifyReply, FastifyRequest } from 'fastify';

export const canReadProduct = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const [, token] = req.headers?.authorization?.split(' ') || [];

  if (!token) {
    return reply.status(401).send({ message: 'No token found. Login first.' });
  }

  try {
    jwt.verify(token, 'my-super-secret');
  } catch (error) {
    return reply.status(400).send({ message: 'Invalid token.' });
  }
};
