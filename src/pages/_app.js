import React from "react";
import { ThemeProvider } from "@mui/styles";

import theme from "../theme";


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      
      <Component {...pageProps} />
      
    </ThemeProvider>
  );
}

export default MyApp;
