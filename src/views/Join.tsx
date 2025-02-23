import { useEffect, useState } from "react";
import { getGames } from "../api";

interface JoinProps {
    onJoin: (id: number) => void;
    onClickBack: () => void;
}

function Join({ onJoin, onClickBack }: JoinProps) {
    const [games, setGames] = useState<Array<number>>([]);

    useEffect(() => {
        const loadGames = async () => {
            const games = await getGames();
            console.log(games);
            setGames(games);
        };

        loadGames();
    }, []);

    return (
        <>
            <button onClick={onClickBack}>Back</button>
            <h1>Games</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {games.map((game) => (
                    <button onClick={() => onJoin(game)}>{game}</button>
                ))}
            </div>
        </>
    );
}

export default Join;
