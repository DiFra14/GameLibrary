/**
 * Configurazioni di base. Elementi del DOM. Elementi comuni
 */
export const elements = {
    searchGameForm: document.querySelector('.search-game'),
    searchGameInput: document.querySelector('.search-game__input'),
    searchGameButton: document.querySelector('.search-game__submit'),
    container: document.querySelector('.container'),
    gameDetailsView: document.querySelector('.game-detail'),
    gameCard: document.querySelector('.game'),
    topTitle: document.querySelector('.top-title')
}

export const showLoader = (container) => {
    const markup = `
        <div class="lds-ripple">
            <div>
            </div>
            <div>
            </div>
        </div>;
    `
    elements.container.insertAdjacentHTML('beforebegin', markup);
};

export const removeLoader = (container) => {
    const loader = document.querySelector('.lds-ripple');
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};

const Platforms = new Map();
Platforms.set('PC', '');
Platforms.set('Xbox', '');
Platforms.set('iOS', '');
Platforms.set('macOS', '');
Platforms.set('PlayStation', '<i class="fa fa-playstation"></i>');
Platforms.set('Wii', '');
Platforms.set('Linux', '');

export const renderPlatform = (platforms) => {
    let markup = '';
    platforms.forEach(platform => {
        markup += Platforms.get(platform);
    });
    console.log(markup);
    return markup;
};