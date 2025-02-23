export const url = "http://192.168.143.1:5000"

export const newGame = async () => {
    const response = await fetch(url + "/games", {
        method: "POST",
    });
    return await response.json();
}

export const getGames = async () => {
    const response = await fetch(url + "/games");
    return await response.json();
}

export const getGame = async (id: number) => {
    const response = await fetch(url + "/games/" + id);
    return await response.json();
}

export const postMove = async (id: number, row: number, col: number, player: number) => {
    console.log("post move:", player);
    await fetch(url + "/games/" + id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "row": row,
            "col": col,
            "player": player,
        })
    });
}