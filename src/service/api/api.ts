import loginApi from "./login"
const API = {
    loginApi
}
export default {
    install: (Vue: any, options: any) => {
        Vue.$API = API
    }
}