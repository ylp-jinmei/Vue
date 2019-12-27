import axios from 'axios'
import { Loading } from 'element-ui'

axios.defaults.timeout = 50000;
let loading;

function startLoading() {
    loading = Loading.service({
        lock: true,
        spinner: 'el-icon-loading',
        text: '加载中...',
        background: 'rgba(0,0,0,.7)'
    })
}

function endLoading(params) {
    loading.close()
}
axios.interceptors.request.use(config => {
    startLoading();
    return config
}, error => {
    endLoading()
    Promise.reject(error)
})

axios.interceptors.response.use(
    response => {
        endLoading()
        return response
    },
    error => {
        endLoading()
        return Promise.reject(error)
    }
)
export default axios