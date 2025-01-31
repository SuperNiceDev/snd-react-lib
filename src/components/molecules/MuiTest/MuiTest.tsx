import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputText from "@src/components/atoms/InputText";
import Text from "@src/components/atoms/Text";

import css from "./MuiTest.module.scss";

export default function MuiTest() {
  return (
    <div className={`${css.root}`}>
      {`<MuiTest>`}

      <main className={`${css.main} tw-px-4`}>
        <Text className="tw-mb-2 tw-text-lime-700" text="My Text component" />

        <div className="tw-mb-2 tw-text-lime-700">
          <InputText
            className="tw-border-2 tw-border-slate-300"
            placeholder="InputText component placeholder"
            // value="InputText component value"
          />
        </div>

        <h1 className="tw-mb-2 tw-text-3xl tw-font-bold tw-text-lime-700">
          {`Tailwind <h1 />`}
        </h1>

        <Typography
          className="tw-mb-2 tw-text-3xl tw-font-bold tw-text-lime-700"
          variant="h1"
          // component="div"
        >
          {`Mui <Typography variant="h1" />`}
        </Typography>

        <Stack
          className="tw-my-4 tw-text-3xl tw-font-bold tw-underline tw-text-lime-700"
          spacing={2}
          direction="column"
        >
          <Button variant="contained">Button variant Contained</Button>
          <Button variant="outlined">Button variant Outlined</Button>
          <Button className="tw-text-lime-700" variant="text">
            Button variant Text
          </Button>
        </Stack>
      </main>

      {`</MuiTest>`}
    </div>
  );
}
