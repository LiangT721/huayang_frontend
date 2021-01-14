import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: "Eng"
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        lan: state => {
            return state.language;
        }
    }
});