// via: https://github.com/vercel/next.js/blob/18a9c7e371efc4c487f9c3599c3211ce30009d6c/examples/with-storybook/.storybook/config.js

import { configure, addParameters } from "@storybook/react";

addParameters({
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (a[1].kind === "Welcome") {
        return -1;
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true });
    },
  },
});

// automatically import all files ending in *.stories.js
const req = [
  require.context("../pages", true, /.stor(ies|y).[tj]sx$/),
  require.context("../components", true, /.stor(ies|y).[tj]sx$/),
];

// the first argument can be an array too, so if you want to load from different locations or
// different extensions, you can do it like this: configure([req1, req2], module)
configure(req, module);
