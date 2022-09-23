import { FastifyInstance } from "fastify";
import * as controller from "./controller";
import { listProductsSchema } from "./schema";

export default async function productRouter(fastify: FastifyInstance) {
  fastify.get("/", { schema: listProductsSchema }, controller.listProducts);
}
