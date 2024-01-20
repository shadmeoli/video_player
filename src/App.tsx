// import React from "react";
// import { app, Menu } from "electron";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcomescreen from "./screens/Welcomescreen.tsx";
import Player from "./screens/Player.tsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomescreen />} />
        <Route path="/playback" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
