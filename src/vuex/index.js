import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

/* eslint-disable no-new */
// vuex实例化
const store = new Vuex.Store({
    state: {
        count: 0,
        ylp: {
            a: 1,
            b: 2,
            c: 3,
        }
    },
    mutations: {
        countIncrease(state, n) {
            state.count += n
        },
        countIncreaseremove(val) {
            val.count--
        }
    }
})
export default store //导出全局可以使用到1