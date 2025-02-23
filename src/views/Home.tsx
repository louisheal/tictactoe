interface HomeProps {
    onClickJoin: () => void;
    onClickStart: () => void;
}

function Home({ onClickJoin, onClickStart }: HomeProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button onClick={onClickJoin}>Join Game</button>
            <button onClick={onClickStart}>Start Game</button>
        </div>
    );
}

export default Home;
