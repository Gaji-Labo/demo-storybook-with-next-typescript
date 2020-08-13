const addParameters = require("@storybook/react").addParameters;

addParameters({
  options: {
    storySort: {
      order: ["Welcome", "README"],
    },
  },
});
