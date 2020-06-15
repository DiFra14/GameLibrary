/**
 * Controller
 */
import './sass/main.scss';
import Search from './models/Search';
import Game from './models/Game';
import Error from './models/Error';
import * as searchView from  './views/searchView';
import * as gameView from  './views/gameView';
import * as errorView from './views/errorView';
import { elements, showLoader, removeLoader } from './views/base';
 
// Global app state
const state = {}

const goToHome = () => {
    window.location = '/';
}

const clearContainer = () => {
    elements.container.innerHTML = '';
};

const manageErrors = (error) => {
    removeLoader(elements.container);
            
    clearContainer();
    errorView.renderErrorPage(error);
};

// Search controller
const searchController = async (back, search) => {
    if (!back) {
        const query = elements.searchGameInput.value;
        state.search = new Search(query);

        showLoader(elements.container);
        try {
            clearContainer();
            searchView.clearSearchInput();

            await state.search.findGameByQuery();

            removeLoader(elements.container);

            searchView.renderGamesSearch(state.search.results, state.search.query);
        } catch(err) {
            state.error = new Error(err);
            manageErrors(state.error);
        }
    } else {
        clearContainer();
        searchView.clearSearchInput();

        searchView.renderGamesSearch(search.results, search.query);
    }
};

// Game controller
const gameController = async (id) => {
    state.game = new Game(id);

    try {
        clearContainer();

        await state.game.findDetailGameById();
        
        gameView.renderGame(state.game.results);
    } catch(error) {
        state.error = new Error(err);
        manageErrors(state.error);
    }
};

// Event listener
elements.searchGameForm.addEventListener('submit', e => {
    e.preventDefault();
    searchController();
});

// General selector
elements.container.addEventListener('click', (e) => {
    const game = e.target.closest('.game');
    const back = e.target.closest('.goback');

    if (back) {
        searchController('goback', state.search);
    }

    if (game) {
        gameController(game.id);
    }
});

elements.topTitle.addEventListener('click', goToHome);

// Global object
window.addEventListener('load', () => {
    searchController('');
});