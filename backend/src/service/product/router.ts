import { FastifyInstance } from "fastify";
import * as controller from "./controller";

export default async function productRouter(fastify: FastifyInstance) {
  fastify.get("/", { schema: undefined }, controller.listProducts);
}
