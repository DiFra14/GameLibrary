/**
 * Search view
 */
import { elements, renderPlatform } from './base';

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
    console.log('platforms', newPlatforms);
    return `<span class="platform-icons">${renderPlatform(newPlatforms)}</span>`;
}
 
const renderGame = (game) => {
    const gamesResults = document.querySelector('.games-content')

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
    gamesResults.insertAdjacentHTML('beforeend', markup);
};

export const renderGamesSearch = (games, query) => {
    const markup = `
        <div class="games-results">
            <div>
                <h2 class="section-title">${query ? `Search for: ${query}` : 'Popular Games'}</h2>
            </div>
            <div class="games-content">
            </div>
        </div>
    `;
    elements.container.insertAdjacentHTML('afterbegin', markup);
    games.results.forEach(game => renderGame(game));
};