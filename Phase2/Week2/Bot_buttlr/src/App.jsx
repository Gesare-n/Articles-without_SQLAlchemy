import React, { useEffect, useState } from "react";
import axios from "axios";

import BotCollection from "./Components/ Botcollection";
import YourBotArmy from "./Components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data.bots));
  }, []);

 const enlistBot = (bot) => {
    if (!yourBotArmy.some((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const removeBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  const deleteBot = async (bot) => {
    await axios.delete(`http://localhost:3000/bots${bot.id}`);
    removeBot(bot);
  };

  return (
    <div className="app">
      <header>
        <h1>Bot Battlr</h1>
      </header>
      <main>
        <YourBotArmy army={yourBotArmy}  />
        < BotCollection bots={bots} onEnlist={enlistBot} />

      </main>
      <footer>
        <p>&copy; 2023 Bot Battlr</p>
      </footer>
      <button onClick={fetchBots}>Fetch Bots</button>
    </div>
  );
}

export default App;