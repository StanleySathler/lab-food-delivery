import Home from "../../../pages/index.tsx";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders the home", () => {
    render(<Home />);

    expect(screen.getByTestId("home-title")).toBeInTheDocument();
  });
});
