import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import Text from "@src/components/atoms/Text";

it("renders correctly", () => {
  const tree = renderer.create(<Text />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("contains correct placeholder", () => {
  render(<Text text="my text" />);
  const text = screen.getByText("my text");

  expect(text).toBeInTheDocument();
});
