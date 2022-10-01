import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const BotContext = createContext();

function BotProvider({ children }) {
  const apiUrl = " http://localhost:8002/bots";
  const [botCollection, setBotCollection] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not find the resource");
        }
        return res.json();
      })
      .then((bots) => {
        setBotCollection(bots);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrors([error.message]);
        setIsLoading(false);
      });
  }, []);

  // Adds bot to botArmy
  function handleBotClick(bot) {
    const value = botArmy.includes(bot);
    if (value === true) {
      setBotArmy(botArmy);
    } else {
      setBotArmy([...botArmy, bot]);
    }
  }

  const values = {
    botCollection,
    setBotCollection,
    isLoading,
    botArmy,
    setBotArmy,
    errors,
    setErrors,
    handleBotClick
  };

  return <BotContext.Provider value={values}> {children} </BotContext.Provider>;
}

export { BotProvider, BotContext };
