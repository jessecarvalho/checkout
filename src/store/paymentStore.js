import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        creditCard: {
            number: "",
            name: "",
            document: "",
            // ...other properties
        },
    },
    mutations: {
        updateCreditCard(state, payload) {
            state.creditCard = { ...state.creditCard, ...payload };
        },
        // ...other mutations
    },
    actions: {
        updateCreditCard({ commit }, payload) {
            commit("updateCreditCard", payload);
        },
        // ...other actions
    },
    getters: {
        // ...getters for computed properties
    },
});
