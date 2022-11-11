import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import EpisodeComponent from "..";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

const dummyEpisode = {
  id: 1,
  name: "TestName",
  air_date: "TestDate",
  episode: "TestEpisode",
  characters: ["Characters1", "Characters2"],
  url: "example.com",
  created: "Test Created",
};

describe("Episode Component", () => {
  render(<EpisodeComponent {...dummyEpisode} />);
  const episode = screen.getByTestId("episodeID");

  // Test 1
  test("Episode Rendering", () => {
    expect(episode).toBeInTheDocument();
  });

  // Test 2
  test("Episode Name", () => {
    expect(episode).toHaveTextContent("TestName");
  });
});
