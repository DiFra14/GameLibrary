/**
 * Game view
 */
import { elements, showPlatforms } from './base';

const renderPublisher = (publishers) => {
    let publishersString = [];
    if (publishers.length > 1) {
        publishers.forEach(pub => {
            publishersString.push(pub.name);
        });
        return publishersString.join(',');
    }
    return publishers[0].name;
};

const renderGenres = (genres) => {
    let genresString = [];
    if (genres.length > 1) {
        genres.forEach(genre => {
            genresString.push(genre.name);
        });
        return genresString.join(',');
    }
    return genres[0].name;
};

export const renderGame = (game) => {
    console.log('game', game);
    const markup = `
    <div class="game-detail">
        <h1 class="game-detail__title">${game.name}</h1>
        <div class="game-detail__content">
            <img class="game-detail__content__cover" src="${game.background_image}" alt="${game.name}">
            <div class="game-detail__content__info">
                <ul class="game-info-list">
                    <li><span>Genres:</span> ${renderGenres(game.genres)}</li>
                    <li><span>Platforms:</span> ${showPlatforms(game.platforms)}</li>
                    <li><span>Publisher:</span> ${renderPublisher(game.publishers)}</li>
                    <li><span>Released:</span> ${game.released}</li>
                </ul>
                <p class="game-detail__content__desc">${game.description_raw}</p>
                <!-- <div class="rating">
                     <span>VOTO</span>
                </div> -->
            </div>
        </div>
        <button id="back" class="btn btn-primary goback">BACK</button>
    </div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
};
