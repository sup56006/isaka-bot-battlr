import React from "react";

function BotCard({ bot, onClick, onDischarge }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {onDischarge && (
        <button
          className="discharge-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDischarge();
          }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
