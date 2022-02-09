import env from 'root/env';
export const config = {
    baseURL: env[process.env.NODE_ENV].url,
    timout: 50000
}