import {
    doGet,
    doPost,
    doDelete,
    doUpdateFile,
    doPut,
    getUrlDownLoad
} from '~/service/axios/http';

const loginApi = {
    login: (params: any) => doPost('/login', params)
}
export default loginApi;