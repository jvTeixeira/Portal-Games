const getGames = async () => {
    const response = await fetch("https://api.rawg.io/api/games?key=bd5a173ddf44438494169173b40b4a73");
    const games = await response.json();

    games.results.forEach((game) => {
        const gameContainer = document.createElement("div");
        
        gameContainer.classList.add('release');

        gameContainer.innerHTML = `
            <img src="${game.background_image}">
            <strong>${game.name}</strong>
            <span>${game.released}</span>
            <span>Rating: ${game.metacritic}</span>
        `

        const gamesWrap = document.querySelector(".releases");
        gamesWrap.appendChild(gameContainer)
    })
};

const getPlataforms = async () => {
    const response = await fetch("https://api.rawg.io/api/platforms?key=bd5a173ddf44438494169173b40b4a73")
    const plataforms = await response.json()

    console.log(plataforms)
}

getPlataforms();
getGames();
