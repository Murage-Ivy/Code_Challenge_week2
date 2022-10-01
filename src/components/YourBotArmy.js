import React from "react";
import { BotContext } from "../Hooks/Bot";
import BotCard from "./BotCard";
import { useContext } from "react";

function YourBotArmy() {
  const{botArmy} = useContext(BotContext)
  const botArmies = botArmy.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      isInBotArmy={true}
    />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmies}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
