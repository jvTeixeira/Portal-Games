const getGames = async () => {
    const response = await fetch("https://api.rawg.io/api/games?key=bd5a173ddf44438494169173b40b4a73");
    const games = await response.json();

    games.results.slice(-9).forEach((game) => {
        const gameContainer = document.createElement("div");
        gameContainer.classList.add('release');
        gameContainer.innerHTML = `
            <a href="/detalhes.html?id=${game.id}">
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

const getPublishers = async () => {
    const response = await fetch("https://api.rawg.io/api/publishers?key=bd5a173ddf44438494169173b40b4a73")
    const publishers = await response.json()
    publishers.results.slice(-3).forEach((publisher) => {
        const publisherContainer = document.createElement("div");
        publisherContainer.classList.add('publisher');
        publisherContainer.innerHTML = `
        <h3>${publisher.name}</h3>
        <img class="publisher-image" src="${publisher.image_background}" />
        <div class="publisher-text">
            <strong>
                Número de jogos:
            </strong>
            <span>
                ${publisher.games_count}
            </span>
            <a class="more-details" href="#">
                Mais detalhes...
            </a>
        `

        const publishersWrap = document.querySelector("#box-publisher");
        publishersWrap.appendChild(publisherContainer)

    })
}

const getPlataforms = async () => {
    const response = await fetch("https://api.rawg.io/api/platforms?key=bd5a173ddf44438494169173b40b4a73");
    const plataforms = await response.json()
    plataforms.results.slice(-3).forEach((plataform) => {
        const plataformContainer = document.createElement("div");
        plataformContainer.classList.add('plataform');
        plataformContainer.innerHTML = `
        <h3>${plataform.name}</h3>
        <img class="plataform-image" src="${plataform.image_background}" />
        <div class="plataform-text">
            <strong>
                Número de jogos:
            </strong>
            <span>
                ${plataform.games_count}
            </span>
            <a class="more-details" href="#">
                Mais detalhes...
            </a>
        `

        const plataformsWrap = document.querySelector("#box-plataform");
        plataformsWrap.appendChild(plataformContainer)

    })
}

const search = async () => {
    let nomeGame = document.querySelector('.caixa-pesquisa').value;


    const response = await fetch("https://api.rawg.io/api/games?key=bd5a173ddf44438494169173b40b4a73")
    const games = await response.json()


    games.results.forEach((game) => {
        if (nomeGame == game.name) {
            let url = "pesquisa.html?"+game.slug;
            window.open(url, '_self');
        }
    })



}

getPlataforms();
getPublishers();
getGames();