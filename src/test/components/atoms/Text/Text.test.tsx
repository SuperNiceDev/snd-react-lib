import React from "react";

import { render, screen } from "@testing-library/react";
import Text from "snd-react-lib/components/atoms/Text";

it("matches the snapshot", () => {
  const { asFragment } = render(<Text>My text</Text>);
  expect(asFragment()).toMatchSnapshot();
});

test("contains correct placeholder", () => {
  render(<Text text="my text" />);
  const text = screen.getByText("my text");

  expect(text).toBeInTheDocument();
});
