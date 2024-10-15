// https://mui.com/base-ui/guides/working-with-tailwind-css/#getting-started
import React, { ReactNode } from "react";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import theme from "./theme";

export default function MuiProvider({ children }: { children: ReactNode }) {
  return (
    // <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </StyledEngineProvider>
  );
}
