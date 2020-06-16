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

export const showPlatforms = (platforms) => {
    const newPlatforms = fixPlatformsName(platforms);

    return `<span class="platform-icons">${renderPlatform(newPlatforms)}</span>`;
}

const fixPlatformsName = (platforms) => {
    let newPlatforms = [];

    platforms.forEach(platform => {
        if (!newPlatforms.includes(platform.platform.name.split(' ')[0])) {
            newPlatforms.push(platform.platform.name.split(' ')[0]);
        }
    });

    return newPlatforms;
};

const Platforms = new Map();
Platforms.set('PC', '<i class="fab fa-microsoft"></i>');
Platforms.set('Xbox', '<i class="fab fa-xbox"></i>');
Platforms.set('iOS', '<i class="fab fa-app-store-ios"></i>');
Platforms.set('macOS', '<i class="fab fa-apple"></i>');
Platforms.set('PlayStation', '<i class="fab fa-playstation"></i>');
Platforms.set('Linux', '<i class="fab fa-linux"></i>');
Platforms.set('Android', '<i class="fab fa-android"></i>');

const renderPlatform = (platforms) => {
    let markup = '';
    platforms.forEach(platform => {
        if (Platforms.has(platform)) {
            markup += Platforms.get(platform);
        }        
    });
    return markup;
};