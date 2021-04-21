import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "@config/theme";
import store from "./redux/store/store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configAxios } from "@config/axios";
import { QueryClientProvider } from "react-query";
import { configReactQuery } from "@config/react-query";
// console.log(store.);
configAxios(store);
const qc = configReactQuery({ store });
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
          <QueryClientProvider client={qc}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
