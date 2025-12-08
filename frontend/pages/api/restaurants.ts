// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { restaurants } from "../../src/mocks/database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(restaurants);
}
