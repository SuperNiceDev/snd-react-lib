import React from "react";

import Text from "@src/components/atoms/Text";
import { render, screen } from "@testing-library/react";

it("matches the snapshot", () => {
  const { asFragment } = render(<Text>My text</Text>);
  expect(asFragment()).toMatchSnapshot();
});

test("contains correct placeholder", () => {
  render(<Text text="my text" />);
  const text = screen.getByText("my text");

  expect(text).toBeInTheDocument();
});
