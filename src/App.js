import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then(setBots)
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  function enlistBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Delete error:", err));
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
