import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import css from "./MuiTest.module.scss";

export default function MuiTest() {
  return (
    <div className={`${css.root}`}>
      {`<MuiTest>`}

      <main className={`${css.main} tw-px-4`}>
        {/* <TextExt className="tw-text-lime-500" text="MyTextExt" /> */}

        {/* <Text className="tw-text-lime-500" text="MyText" /> */}

        {/* <div className="tw-text-lime-500">
          <InputText
            className="tw-border-2 tw-border-slate-50 tw-text-lime-500"
            placeholder="InputText placeholder"
          />
        </div> */}

        <h1 className="tw-m-2 tw-text-3xl tw-font-bold tw-text-lime-700">
          {`Tailwind: <h1 />`}
        </h1>

        <Typography
          className="tw-m-2 tw-text-3xl tw-font-bold tw-text-lime-700"
          variant="h1"
          gutterBottom
        >
          {`Mui: <Typography variant="h1" />`}
        </Typography>

        <Stack
          className="tw-m-2 tw-text-3xl tw-font-bold tw-underline tw-text-lime-700"
          spacing={2}
          direction="column"
        >
          <Button variant="contained">variant Contained</Button>
          <Button variant="outlined">variant Outlined</Button>
          <Button className="tw-text-lime-700" variant="text">
            variant Text
          </Button>
        </Stack>
      </main>
      <br />
      {`</MuiTest>`}
    </div>
  );
}
