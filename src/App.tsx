import { useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Join from "./views/Join";
import Game from "./views/Game";
import { newGame } from "./api";

function App() {
    const [tab, setTab] = useState("home");
    const [gameId, setGameId] = useState(0);
    const [player, setPlayer] = useState(1);

    const onClickBack = () => setTab("home");
    const onClickJoin = () => setTab("join");

    const onJoin = (id: number) => {
        setGameId(id);
        setPlayer(2);
        setTab("game");
    };

    const onClickStart = async () => {
        const gameId = await newGame();
        setGameId(gameId);
        setPlayer(1);
        setTab("game");
    };

    if (tab == "join") {
        return <Join onJoin={onJoin} onClickBack={onClickBack} />;
    }

    if (tab == "game") {
        return <Game id={gameId} player={player} onClickBack={onClickBack} />;
    }

    return <Home onClickJoin={onClickJoin} onClickStart={onClickStart} />;
}

export default App;
