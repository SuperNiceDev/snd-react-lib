// https://storybook.js.org/docs/react/configure/features-and-behavior
  
  
import { addons } from '@storybook/manager-api';

import supernice_io from "./themes/supernice_io";

addons.setConfig({
  // navSize: 300,
  // bottomPanelHeight: 300,
  // rightPanelWidth: 300,
  // panelPosition: 'bottom',
  // enableShortcuts: true,
  // showToolbar: true,
  theme: supernice_io,
  // selectedPanel: undefined,
  initialActive: 'sidebar',
  // sidebar: {
  //   showRoots: false,
  //   collapsedRoots: ['other'],
  // },
  // toolbar: {
  //   title: { hidden: false },
  //   zoom: { hidden: false },
  //   eject: { hidden: false },
  //   copy: { hidden: false },
  //   fullscreen: { hidden: false },
  // },
});