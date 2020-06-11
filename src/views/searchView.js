/**
 * Search view
 */
import { elements, renderPlatform } from './base';

export const clearContainer = () => {
    elements.container.innerHTML = '';
};

export const clearSearchInput = () => {
    elements.searchGameInput.value = '';
};

const showPlatforms = (platforms) => {
    let newPlatforms = [];

    platforms.forEach(platform => {
        if (!newPlatforms.includes(platform.platform.name.split(' ')[0])) {
            newPlatforms.push(platform.platform.name.split(' ')[0]);
        }
    });
    return `<span>${renderPlatform(newPlatforms)}</span>`;
}
 
const renderGame = (game) => {
    const gamesContainer = document.querySelector('.games-results');
    const markup = `
        <div class="game" id="${game.id}">
            <div class="game__details">
                <img class="game-cover" src="${game.background_image}" alt="#">
                <div class="game-info">
                    <p class="game-info__name">${game.name}</p>
                    <p class="game-info__platforms">${showPlatforms(game.platforms)}</p>
                </div>
            </div>  
        </div>
    `;
    gamesContainer.insertAdjacentHTML('beforeend', markup);
};

export const renderGamesSearch = (games) => {
    const markup = `
        <div class="games-results">
        </div>
    `;
    elements.container.insertAdjacentHTML('afterbegin', markup);
    games.results.forEach(game => renderGame(game));
};