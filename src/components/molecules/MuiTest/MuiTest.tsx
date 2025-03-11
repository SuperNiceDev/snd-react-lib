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
        <div className="tw-mb-2">
          {`<Text>`}
          <Text className="tw-text-lime-700" text="Text text prop test" />
          {`</Text>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw-mb-2">
          {`<InputText>`}
          <div className="tw-text-lime-700">
            <InputText
              className="tw-border-2 tw-border-slate-300"
              placeholder="InputText placeholder prop test"
              // value="InputText value prop test"
            />
          </div>
          {`</InputText>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw-mb-2">
          {`<h1>`}
          <h1 className="tw-text-3xl tw-font-bold tw-text-lime-700">
            {`Tailwind <h1 />`}
          </h1>
          {`</h1>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw-mb-2">
          {`<Typography variant="h1">`}
          <Typography
            className="tw-text-3xl tw-font-bold tw-text-lime-700"
            variant="h1"
            // component="div"
          >
            {`Mui <Typography variant="h1" />`}
          </Typography>
          {`</Typography>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw-mb-2">
          {`<Stack>`}
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
          {`</Stack>`}
        </div>
      </main>

      {`</MuiTest>`}
    </div>
  );
}
