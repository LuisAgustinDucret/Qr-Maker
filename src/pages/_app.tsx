import { Provider, useSelector } from "react-redux";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@material-ui/core/styles";
import { palette as colors } from "../constants";
import GlobalStyles from "../global-styles";
import { AppProps } from "next/app";

import createStore from "../store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = createStore();

const App = ({ Component, pageProps }: AppProps) => {
  const darkMode = store.getState().config.darkMode;
  const theme = createTheme();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles theme={theme} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps}/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
