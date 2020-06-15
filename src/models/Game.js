/**
 * Model del game. Sarà una classe che identificà lo stato del dettaglio di un gioco
 */
import axios from 'axios';

export default class Game {
    constructor(id) {
        this.id = id;
    }

    async findDetailGameById() {
        try {
            const gameDetail = await axios.get(`${process.env.API_ENDPOINT_GAME_DETAIL}/${this.id}`);
            this.results = gameDetail.data;
        } catch(error) {
           throw(error);
        }
    }

}