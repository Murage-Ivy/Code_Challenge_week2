import React from "react";
import BotsPage from "./BotsPage";
import { BotProvider } from "../Hooks/Bot";

function App() {
  return (
    <div className="App">
      <BotProvider>
      <BotsPage />
      </BotProvider>
      
    </div>
  );
}

export default App;
