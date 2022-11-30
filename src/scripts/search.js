const search = async () => {
    nomeGame = document.querySelector('.texto-pesquisa').value;

    const response = await fetch("https://api.rawg.io/api/games?key=bd5a173ddf44438494169173b40b4a73")
    const games = await response.json()

    games.results.forEach((game) => {
        if (game.name == nomeGame) {
            const gameContainer = document.createElement("div");
            gameContainer.classList.add('release');
            gameContainer.innerHTML = `
            <a href="#">
            <img src="${game.background_image}">
            <div class="game-information">
            <strong>${game.name}</strong>
            <span>${game.released}</span>
            <span>Rating: ${game.metacritic}</span>
            </div>
            </a>
        `

            const gamesWrap = document.querySelector(".releases");
            gamesWrap.appendChild(gameContainer)

        }
    })
}
