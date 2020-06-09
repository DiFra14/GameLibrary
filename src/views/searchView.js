/**
 * View del componente Search! Gestisce tutto quello che riguarda il form di ricerca principale
 */
import { elements } from './base';

export const cleanGameResults = () => {
    elements.gameResults.innerHTML = '';
};

const showPlatforms = (platforms) => {
    let markup = '';
    platforms.forEach(platform => {
        markup += `<span>${platform.platform.name}</span>`;
    });
    return markup;
}
 
const renderGame = (game) => {
    const markup = `
        <div class="game">
            <div class="game__details">
                <img class="game-cover" src="${game.background_image}" alt="#">
                <div class="game-info">
                    <p class="game-info__name">${game.name}</p>
                    <p class="game-info__platforms">${showPlatforms(game.platforms)}</p>
                </div>
            </div>  
        </div>
    `;

    elements.gameResults.insertAdjacentHTML('beforeend', markup);
};

export const renderGamesSearch = (games) => {
    games.results.forEach(renderGame);
};