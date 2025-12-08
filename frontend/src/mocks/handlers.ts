import { http, HttpResponse } from "msw";
import { restaurants } from "./database";

export const handlers = [
  http.get("/api/restaurants", () => {
    return HttpResponse.json(restaurants);
  }),
];
