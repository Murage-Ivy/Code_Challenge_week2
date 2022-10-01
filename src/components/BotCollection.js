import React, { useContext } from "react";
import { BotContext } from "../Hooks/Bot";
import BotCard from "./BotCard";
function BotCollection() {
  // Your code here

  const { botCollection, isLoaded } = useContext(BotContext);
  const botCollections = botCollection.map((bot) => (
    <BotCard key={bot.id} bot={bot} />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">
        {isLoaded ? <h2>Loading.....</h2> : botCollections}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
