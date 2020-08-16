const baseConfig = require("./jest.config");

module.exports = {
  ...baseConfig,
  name: "Storyshots",
  displayName: "storyshots",
  testMatch: ["<rootDir>/Storyshots.test.ts"],
};
