import "./App.css";
import { ThemeProvider } from "./utils/themeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import { useState, useEffect } from "react";

function App() {
  const [detail, setDetail] = useState();
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      await fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => {
          setLoading(true);
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setCountries(data);
        })
        .catch((err) => {
          setLoading(false);
        });
    };

    fetchApi();
  }, []);

  return (
    <ThemeProvider>
      <div className="w-screen h-screen dark:bg-dbg bg-lbg overflow-x-hidden transition-all">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Wrapper
                  detailHandler={setDetail}
                  countries={countries}
                  loading={loading}
                />
              }
            />
            <Route
              path="/detail"
              element={
                detail ? (
                  <Detail
                    detail={detail}
                    detailHandler={setDetail}
                    countries={countries}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
