/**
 * Controller
 */
import './sass/main.scss';
import Search from './models/Search';
import Game from './models/Game';
import * as searchView from  './views/searchView';
import * as gameView from  './views/gameView';
import { elements, showLoader, removeLoader } from './views/base';
 
// Global app state. (Lo stato dell'applicazione)
const state = {}

const goToHome = () => {
    window.location = '/';
}

// Search controller
const searchController = async () => {
    const query = elements.searchGameInput.value;
    state.search = new Search(query);

    try {
        searchView.clearContainer();
        searchView.clearSearchInput();
        showLoader(elements.container);

        await state.search.findGameByQuery();

        removeLoader(elements.container);

        searchView.renderGamesSearch(state.search.results);
    } catch(error) {
        // TODO: Gestione degli errori!
        console.log(error);
    }
};

// Game controller
const gameController = async (id) => {
    state.game = new Game(id);

    try {
        searchView.clearContainer();

        await state.game.findDetailGameById();
        
        gameView.renderGame(state.game.results);
    } catch(error) {
        // TODO: Gestione degli errori!
        console.log(error);
    }
};

// Event listener
elements.searchGameForm.addEventListener('submit', e => {
    e.preventDefault();
    searchController();
});

elements.container.addEventListener('click', (e) => {
    const gameId = e.target.closest('.game').id;
    gameController(gameId);
});

elements.topTitle.addEventListener('click', goToHome);