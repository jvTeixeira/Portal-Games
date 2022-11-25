const getGames = async () => {
    const response = await fetch("https://api.rawg.io/api/games?key=bd5a173ddf44438494169173b40b4a73");
    const games = await response.json();

    console.log(games)

    games.results.slice(3).forEach((game) => {
        const gameHeaderContainer = document.createElement("div");
        gameHeaderContainer.classList.add('release');
        gameHeaderContainer.innerHTML = `
        <div class="carousel-item active">
        <div class="flex-carousel-item">
            <iframe width="640" height="480" src=""
                <img src="${game.background_image}">
            </iframe>
            <div class="main-text">
                <h3 class="titulo">${game.name}</h3>
                <span class="texto">
                    <strong>Sobre: ${game.description}</strong>  
                </span>
                <strong class="subtitulo">
                    <span>Lançamento: ${game.released}</span>
                </strong>
                <p class="texto">Avaliação: ${game.rating}</p>
            </div>
        </div>
        </div>
        `

        const gamesWrap = document.querySelector(".carousel-inner");
        gamesWrap.appendChild(gameHeaderContainer)

    })

    games.results.slice(11).forEach((game) => {
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

    })
};

const getPlataforms = async () => {
    const response = await fetch("https://api.rawg.io/api/platforms?key=bd5a173ddf44438494169173b40b4a73")
    const plataforms = await response.json()

    console.log(plataforms)
}

getPlataforms();
getGames();