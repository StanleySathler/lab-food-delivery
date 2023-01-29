import Home from "../../../pages/index.tsx";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  // @todo: since Home fetches an API now, we need to mock requests with `msw`.
  it.todo("renders the home");
});
