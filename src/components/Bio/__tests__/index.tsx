import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Bio from "../../Bio";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

const dummyBio = {
  name: "TestName",
  status: "alive",
  species: "human",
  type: "unknown",
  gender: "male",
};

describe("Episode Component", () => {
  render(<Bio {...dummyBio} />);
  const bio = screen.getByTestId("bioID");

  // Test 1
  test("Episode Rendering", () => {
    expect(bio).toBeInTheDocument();
  });

  // Test 2
  test("Episode Name", () => {
    expect(bio).toHaveTextContent("TestName");
  });
});
