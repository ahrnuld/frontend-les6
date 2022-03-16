import { createStore } from vuex;

const store = createStore({
    state() {
        return {
            token: null,
            username: null
        }
    },
    getters: {

    },
    mutations: {
        saveToken(state, parameters) {
            state.token = parameters.token;
            state.username = parameters.username;
        }
    },
    actions: {
        login({commit}, parameters) {
            

        }
    }
});

export default store;