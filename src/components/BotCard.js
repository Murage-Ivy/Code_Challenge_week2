import React, { useContext } from "react";
import { BotContext } from "../Hooks/Bot";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, isInBotArmy = false }) {
  const { handleBotClick, setBotArmy } = useContext(BotContext);

  function handleClick() {
    handleBotClick(bot);
  }
  function handleDeleteBot() {
    setBotArmy((prev) => prev.filter(({ id }) => bot.id !== id));
  }

  function handleDeleteCard(apiUrl) {
    fetch(`${apiUrl}/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setBotArmy((prev) => prev.filter(({ id }) => bot.id !== id));
      });
  }
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={isInBotArmy ? handleDeleteBot : handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small> {bot.catchphrase} </small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" /> {bot.health}
          </span>
          <span>
            <i className="icon lightning" /> {bot.damage}
          </span>
          <span>
            <i className="icon shield" /> {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={
                  isInBotArmy
                    ? () => handleDeleteCard("http://localhost:8002/bots")
                    : handleClick
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
