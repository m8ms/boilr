import { render, screen } from "@testing-library/react";
import App from "../pages/index";
import { themeLight } from "../theme";
import { ThemeProvider } from "styled-components";

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <App />
      </ThemeProvider>
    );
    expect(screen.getByText("Something")).toBeInTheDocument();
  });
});
