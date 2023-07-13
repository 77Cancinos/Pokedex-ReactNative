import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async (endpointURL) => {
    //console.log(endpointURL);
    try {
        const url = `${API_HOST}/pokemon?offset=0&limit=20`;
        const response = await fetch( endpointURL || url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}  

export const getPokemonDetailsByUrlApi = async (url) => {

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}


export const getPokemonDetailsApi = async (id) => {

    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}