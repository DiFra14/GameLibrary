/**
 * Configurazioni di base. Elementi del DOM. Elementi comuni
 */
export const elements = {
    searchGameForm: document.querySelector('.search-game'),
    searchGameInput: document.querySelector('.search-game__input'),
    searchGameButton: document.querySelector('.search-game__submit'),
    container: document.querySelector('.container'),
    gameResults: document.querySelector('.games-results')
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
    container.insertAdjacentHTML('beforebegin', markup);
};

export const removeLoader = (container) => {
    const loader = document.querySelector('.lds-ripple');
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};