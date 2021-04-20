import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "@components/Footer";
import Header from "@components/Header";

import { ScrollToTop } from "@components/ScrollToTop";
import GetRoutes from "./config/Route/GetRoutes";
import { LazyMotion } from "framer-motion";
import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";

import { queryClient } from "./config/react-query";
const loadFeatures = () =>
  import("./config/framer-motion").then((res) => res.default);
function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <QueryClientProvider client={queryClient}>
        <div style={{ position: "absolute" }} id="back-to-top-anchor" />
        <Header />
        <ToastContainer />
        <GetRoutes />
        <Footer />
        <ScrollToTop />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </LazyMotion>
  );
}

export default App;
