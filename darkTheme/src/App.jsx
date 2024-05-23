import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <>
      <ThemeButton />
      <Card />
    </>
  );
}

export default App;
