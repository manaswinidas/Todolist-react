import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { useState } from "react";
import Header from "./Header";
import data from "./data.json";

function App() {
  const [todolist, settodolist] = useState(data);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
