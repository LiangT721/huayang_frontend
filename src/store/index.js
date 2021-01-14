import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: true
    },
    mutations: {
        language_toggle: (state, data) => {
            state.language = data
        }
    },
    actions: {},
    modules: {},
    getters: {
        lan: state => {
            return state.language;
        }
    }
});