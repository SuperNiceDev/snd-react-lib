import React from "react";

import Text from "@src/components/atoms/Text";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Text />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("contains correct placeholder", () => {
  render(<Text text="my text" />);
  const text = screen.getByText("my text");

  expect(text).toBeInTheDocument();
});
