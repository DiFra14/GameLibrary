/**
 * Game view
 */
import { elements } from './base';

export const renderGame = (game) => {
    console.log('game', game);
    const markup = `
    <div class="game-detail">
        <h1 class="game-detail__title">${game.name}</h1>
        <div class="game-detail__content">
            <img class="game-detail__content__cover" src="${game.background_image}" alt="${game.name}">
            <div class="game-detail__content__info">
                <ul class="game-info-list">
                    <li><span>Genres:</span></li>
                    <li><span>Platforms:</span></li>
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
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
};
