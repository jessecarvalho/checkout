// fetchCEP.js
import axios from 'axios';

export async function fetchCEP(cep) {
    const cepURL = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await axios.get(cepURL);
        if (response.data.error) {
            console.log("error");
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar CEP: ' + error);
        throw error;
    }
}
