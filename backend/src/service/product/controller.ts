import { FastifyReply, FastifyRequest } from "fastify";

export const listProducts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return reply.status(200).send([{ id: 1, name: "Cup Cake" }]);
};
