import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots enlisted yet.</p>
      ) : (
        army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDischarge={() => onDischarge(bot)}
          />
        ))
      )}
    </div>
  );
}

export default YourBotArmy;
