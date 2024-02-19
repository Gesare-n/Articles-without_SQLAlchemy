import React, { useEffect, useState } from "react";
import Bot from "./Bot.jsx";

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setBots(data.bots));
  }, []);

  const handleEnlist = (bot) => {
    onEnlist(bot);
    setSelectedBot(null);
  };

  const handleClose = () => {
    // Implement logic to close the bot details
    console.log("Close bot details");
  };

  return (
    <ul>
      {bots.map((bot) => (
        <div key={bot.id}>
          <Bot bot={bot} />
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => handleEnlist(bot)}>Enlist Bot</button>
          <button onClick={handleClose}>Close</button>
        </div>
      ))}
    </ul>
  );
};

export default BotCollection;
