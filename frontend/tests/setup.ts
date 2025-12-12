import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "../src/mocks/handlers";
import { afterAll, beforeAll, afterEach } from "vitest";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
