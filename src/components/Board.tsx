interface BoardProps {
    onClick: (row: number, col: number) => void;
    data: Array<Array<number>>;
}

interface RowProps {
    onClick: (col: number) => void;
    data: Array<number>;
}

interface TileProps {
    onClick: () => void;
    data: number;
}

function Board({ onClick, data }: BoardProps) {
    const Tile = function ({ onClick, data }: TileProps) {
        return (
            <button
                style={{
                    width: 100,
                    height: 100,
                }}
                onClick={onClick}
            >
                <h1
                    style={{
                        margin: 0,
                    }}
                >
                    {data == 2 ? "O" : data == 1 ? "X" : " "}
                </h1>
            </button>
        );
    };

    const Row = function ({ onClick, data }: RowProps) {
        return (
            <div style={{ display: "flex", gap: 12 }}>
                <Tile onClick={() => onClick(0)} data={data[0]} />
                <Tile onClick={() => onClick(1)} data={data[1]} />
                <Tile onClick={() => onClick(2)} data={data[2]} />
            </div>
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Row onClick={(col: number) => onClick(0, col)} data={data[0]} />
            <Row onClick={(col: number) => onClick(1, col)} data={data[1]} />
            <Row onClick={(col: number) => onClick(2, col)} data={data[2]} />
        </div>
    );
}

export default Board;
