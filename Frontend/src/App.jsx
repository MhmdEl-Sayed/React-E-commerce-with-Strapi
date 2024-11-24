import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2"
import Header3 from "./components/header/Header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../src/theme";


import './index.css';
import Hero from "./components/hero/Hero";
import Iconsection from "./components/hero/Iconsection";
import Main from "./components/main/main";
import ScrollTop from "./components/Scroll/ScrollTop";




const App = () => {
  const [theme, colorMode] = useMode();
  
  return (
<ColorModeContext.Provider 
// @ts-ignore
value={colorMode}>
  <ThemeProvider 
// @ts-ignore
  theme={theme}>
     <CssBaseline />
<Header1/>
    <Header2/>
    <Header3/>
     <Box bgcolor={theme.
// @ts-ignore
     palette.bg.main}>
      <Hero/>
      <Main/>
      <ScrollTop/>
     </Box>
    
     </ThemeProvider>

</ColorModeContext.Provider>

  )
}

export default App