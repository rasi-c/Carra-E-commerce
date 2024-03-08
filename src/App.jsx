import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Maincart } from "./components/cartpage/maincart";
import { Content } from "./components/homepage/content";
import { Navbar } from "./components/homepage/navbar";
import { Mainproduct } from "./components/productpage/mainproduct";
import { View } from "./components/productpage/view";

export const MyContext = createContext();

function App() {
  // const [product, setData] = useState([]);
  // const [selectedTab, setSelectedTab] = useState("home");
  const [array, setarray] = useState([]);
  // useEffect(() => {
  //   const apiUrl = "https://fakestoreapi.com/products?limit=30";
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((product) => setData(product))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // const onSelectTab = (tab) => {
  //   setSelectedTab(tab);
  // };

  // let component;

  // switch (selectedTab) {
  //   case "home":
  //     component = <Content showProductPage={()=>setSelectedTab('product')} />;
  //     break;

  //   case "product":
  //     component = product.map((item) => {
  //       return <Card item={item} />;
  //     });
  //     break;
  //   case "cart":
  //     component = array.map((item1) => {
  //       return <Cart item={item1}/>
  //     })
  //     break;
  //   case "about":
  //     component = <div style={{ marginTop: 80 }}>about</div>

  //     break;

  //   default:
  //     break;
  // }

  return (
    <MyContext.Provider
      value={{
        cart: array,
        arrkey: setarray,
      }}
    >
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="home" element={<Content />} />
            <Route path="/product" element={<Mainproduct />} />
            <Route path="cart" element={<Maincart />} />
            <Route path="about" element={<Content />} />
            <Route path="view/:cardId" element={<View />} />
            <Route path="*" element={<Content />} /> 
          </Routes>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
