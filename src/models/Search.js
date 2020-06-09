/**
 * Model del search. Sarà una classe che identificà lo stato del componente search
 */
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async findGameByQuery() {
        try {
            const res = await axios.get(`${process.env.API_PROXY}/${process.env.API_ENDPOINT}=${this.query}`);
            this.results = res.data;
        } catch(error) {
            console.log(error);
        }
    }
}