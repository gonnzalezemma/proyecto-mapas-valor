import React from "react";
// import Footer from "./components/Footer";
import NavBar from "./components/Navbar/NavBar";
import { Provider } from "react-redux";
import store from "./store";
/* import { MapProvider } from "./context/MapContext"; */
import Routing from "./routes/Routing";
import "animate.css";

export default function App() {
  return (
<Provider store={store}>


  <NavBar />
  <Routing />

</Provider>


  );
}
