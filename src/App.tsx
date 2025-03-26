import { ThemeProvider } from "@mui/material/styles";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";

import Home from "./pages/home";

function App() {
  // Creating apollo client to connect with qraphql of strapi
  // const client = new ApolloClient({
  //   uri:"http://localhost:1337/graphql",
  //   cache: new InMemoryCache(),
  // });

  console.log(`
    BBBBB   III  DDDD   Y   Y  U   U  TTTTT
    B   B    I   D   D   Y Y   U   U    T  
    BBBBB    I   D   D    Y    U   U    T  
    B   B    I   D   D    Y    U   U    T  
    BBBBB   III  DDDD     Y     UUU     T  
    `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
