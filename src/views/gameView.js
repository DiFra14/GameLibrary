/**
 * Game view
 */
import { elements, renderPlatform } from './base';

export const renderGame = (game) => {
    const markup = `
    <div class="game-detail">
        <h1 class="game-detail__title">${game.name}</h1>
        <div class="game-detail__content">
            <img class="game-detail__content__cover" src="${game.background_image}" alt="${game.name}">
            <div class="game-detail__content__info">
                <ul class="game-info-list">
                    <li><span>Genres:</span></li>
                    <li><span class="game-info-list__platforms">Platforms: ${renderPlatform(game.platforms)}</span></li>
                    <li><span>Publisher:</span></li>
                    <li><span>Released:</span></li>
                </ul>
                <p class="game-detail__content__desc">${game.description_raw}</p>
                <div class="rating">
                    <span>VOTO</span>
                </div>
            </div>
        </div>
    </div>
    <button id="back" class="btn btn-primary goback">BACK</button>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
};
