import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import { ThemeProvider } from "./utils/themeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="w-screen h-screen dark:bg-dbg bg-lbg overflow-x-hidden">
        <Header />
        <Wrapper />
      </div>
    </ThemeProvider>
  );
}

export default App;
