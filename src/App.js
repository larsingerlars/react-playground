import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import CurrencySelection from "./components/ui/CurrencySelection";
import Header from "./components/ui/Header";
import Logo from "./components/Logo";
import Navbar from "./components/ui/Navbar";
import ShowCart from "./components/cart/ShowCart";
import ProductsOverview from "./components/products/ProductsOverview";

// DummyData
import { dummyData } from "./data/dummyData/productsData";

class App extends React.Component {
  render() {
    return (
      <>
        <Header title="Header">
          <Navbar />
          <Logo />
          <div className="header__ui">
            <CurrencySelection />
            <ShowCart />
          </div>
        </Header>
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={<ProductsOverview products={dummyData[3]} />}
            />
            <Route
              path="/women"
              element={<ProductsOverview products={dummyData[0]} />}
            />
            <Route
              path="/men"
              element={<ProductsOverview products={dummyData[1]} />}
            />
            <Route
              path="/kids"
              element={<ProductsOverview products={dummyData[2]} />}
            />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
