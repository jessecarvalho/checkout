<script setup>
import axios from 'axios';

const fetchCEP = async (cep) => {
    const cepURL = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await axios.get(cepURL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar CEP: ' + error);
        throw error;
    }
};
</script>
