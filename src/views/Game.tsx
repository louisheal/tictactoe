import { useEffect, useState } from "react";
import { getGame, postMove, url } from "../api";
import Board from "../components/Board";

interface GameProps {
    id: number;
    player: number;
    onClickBack: () => void;
}

function Game({ id, player, onClickBack }: GameProps) {
    const [state, setState] = useState(0);
    const [turn, setTurn] = useState(1);
    const [board, setBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);

    useEffect(() => {
        const loadGame = async () => {
            const data = await getGame(id);
            setState(data.state);
            setBoard(data.board);
            setTurn(data.player);
        };
        loadGame();

        const eventSource = new EventSource(url + "/games/" + id + "/listen");

        eventSource.onmessage = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            setState(data.state);
            setBoard(data.board);
            setTurn(data.player);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    const onClick = async (row: number, col: number) => {
        await postMove(id, row, col, player);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
            }}
        >
            <button onClick={onClickBack}>Back</button>
            <h1>Game {id}</h1>
            <h1 style={{ margin: 0 }}>
                {state == 0
                    ? turn == player
                        ? "Your Turn"
                        : "Opponent's Turn"
                    : state == 3
                    ? "Tie!"
                    : state == player
                    ? "You Win!"
                    : "You Lose!"}
            </h1>
            <Board onClick={onClick} data={board} />
        </div>
    );
}

export default Game;
