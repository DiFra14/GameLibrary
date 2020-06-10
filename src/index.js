/**
 * Controller
 */
import './sass/main.scss';
import Search from './models/Search';
import * as searchView from  './views/searchView';
import { elements, showLoader, removeLoader } from './views/base';
 
// Global app state. (Lo stato dell'applicazione)
const state = {}

// Search controller
const searchController = async () => {
    const query = elements.searchGameInput.value;
    state.search = new Search(query);
    try {
        searchView.clearGameResults();
        searchView.clearSearchInput();
        showLoader(elements.gameResults);
        await state.search.findGameByQuery();

        removeLoader(elements.gameResults)
        searchView.renderGamesSearch(state.search.results);
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