import { FastifyInstance } from 'fastify';
import * as controller from './controller';
import { canReadProduct } from './hook';
import { listProductsSchema } from './schema';

export default async function productRouter(fastify: FastifyInstance) {
  fastify.get(
    '/',
    {
      schema: listProductsSchema,
      preHandler: canReadProduct,
    },
    controller.listProducts
  );
}
