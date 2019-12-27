const apilist = '/api/toutiao';
const tianqis = '/api/simpleWeather';
const API = {
    toutiao() {
        return `${apilist}/index`
    },
    aaa() {
        return `${tianqis}/query`
    }
}
export default API