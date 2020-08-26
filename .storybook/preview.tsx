import { addParameters, addDecorator } from "@storybook/react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// NOTE: Story 単位で makeStyles の className 連番をリセットしたい
const createGenerateId = () => {
  let counter = 0;

  return (rule, styleSheet) =>
    `${styleSheet.options.classNamePrefix}-${rule.key}-${counter++}`;
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

addDecorator((story) => (
  <StylesProvider generateClassName={createGenerateId()}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  </StylesProvider>
));

addParameters({
  options: {
    storySort: {
      order: ["Welcome", "Hi", "README"],
    },
  },
});
