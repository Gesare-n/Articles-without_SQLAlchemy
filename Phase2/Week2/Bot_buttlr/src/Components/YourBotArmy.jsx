import React, { useState } from "react";
import BotSpecs from "./BotSpecs";

const YourBotArmy = ({ army ,removeBot , deleteBot }) => {
  
  return (
    <div className="your-bot-army " style={ {backgroundColor:"grey"}} > 

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
        <button className="remove-btn" onClick={()=>removeBot(bot.id)}>Remove</button>
        <div className="delete-btn" onClick={()=>deleteBot(bot.id)}>x</div>
      </div>
    ))}
  </div>

    
  );
};

export default YourBotArmy;
