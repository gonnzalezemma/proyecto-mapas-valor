import React from "react";
// import Footer from "./components/Footer";
import NavBar from "./components/Navbar/NavBar";
import { MapProvider } from "./context/MapContext";
import Routing from "./routes/Routing";

export default function App() {
  return (
    <MapProvider>
      <NavBar />
      <Routing />
    </MapProvider>
  );
}
