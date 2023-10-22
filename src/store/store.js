import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        creditCard: {
            name: "",
            number: "",
            document: "",
            expirationMonth: "",
            expirationYear: "",
            cvv: "",
        },
        form: {
            name: "",
            email: "",
            phone: "",
            document: "",
            address: "",
            number: "",
            complement: "",
            neighborhood: "",
            city: "",
            state: "",
            zipcode: "",
        }
    },
    mutations: {
        updateCreditCardData(state, creditCardData) {
            console.log(creditCardData);
            state.creditCard = { ...state.creditCard, ...creditCardData };
        },
        updateFormData(state, formData) {
            state.form = { ...state.form, ...formData };
        },
    },
    actions: {
        updateCreditCard({ commit }, creditCardData) {
            commit("updateCreditCardData", creditCardData);
        },
        updateForm({ commit }, formData) {
            commit("updateFormData", formData);
        },
    },
    getters: {
        getCreditCard: (state) => {
            return state.creditCard;
        },
        getForm: (state) => {
            return state.form;
        }
    },
});
