const renderGames = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");

    const response = await fetch("https://api.rawg.io/api/games?key=bd5a173ddf44438494169173b40b4a73&search=" + name);
    const games = await response.json()

    console.log(games)

    

    games.results.forEach((game) => {
            const gameBox = document.createElement("div");
            gameBox.classList.add('release');
            gameBox.innerHTML = `
            <a href="/detalhes.html?id=${game.id}">
            <img src="${game.background_image}">
            <div class="game-information">
            <strong>${game.name}</strong>
            <span>Rating: ${game.rating}</span>
            <span>Release Date: ${game.released}</span>
            </div>
            </a>
        `
        const gamesContainer = document.querySelector(".search-wrapper");
        gamesContainer.appendChild(gameBox);
    })
}

const search = () => {
    let nomeGame = document.querySelector('.texto-pesquisa').value;
    let url = `/pesquisa.html?name=${nomeGame}`;
    console.log("click")
    window.location.replace(url);
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", search);

renderGames();