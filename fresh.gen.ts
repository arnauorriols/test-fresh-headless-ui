// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $Autocomplete from "./islands/Autocomplete.tsx";
import * as $Dropdown from "./islands/Dropdown.tsx";
import * as $Option from "./islands/Option.tsx";
import * as $Popover from "./islands/Popover.tsx";
import * as $Tab from "./islands/Tab.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Autocomplete.tsx": $Autocomplete,
    "./islands/Dropdown.tsx": $Dropdown,
    "./islands/Option.tsx": $Option,
    "./islands/Popover.tsx": $Popover,
    "./islands/Tab.tsx": $Tab,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
