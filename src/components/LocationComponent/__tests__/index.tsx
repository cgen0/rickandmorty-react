import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import LocationComponent from "../../LocationComponent";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

const dummyLocation = {
  id: 1,
  name: "TestName",
  type: "TestType",
  dimension: "TestType",
  residents: ["Resident1", "Resident2"],
  url: "example.com",
  created: "Test Created",
};

describe("Location Component", () => {
  render(<LocationComponent {...dummyLocation} title="Test Title" />);
  const location = screen.getByTestId("locationID");

  // Test 1
  test("Location Rendering", () => {
    expect(location).toBeInTheDocument();
  });

  // Test 2
  test("Location Title", () => {
    expect(location).toHaveTextContent("Test Title");
  });

  // Test 3
  test("Location Name", () => {
    expect(location).toHaveTextContent("TestName");
  });
});
