import states from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { createStore } from 'vuex';
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
    state() {
        return states
    },
    mutations,
    getters,
    actions,
    plugins: [
        //持久化
        createPersistedstate({
            key: 'saveInfo',
            paths: ['path']
        })
    ]
})