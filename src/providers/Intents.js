import axiosProvider from './config/axios';

export function listIntents(id) {
    return axiosProvider.get(`/intents/list?id=`+id);
}

export function createIntents(object) {
    return axiosProvider.post('/intents/create', object);
}