import axiosProvider from './config/axios';

export function listEntities(id) {
    return axiosProvider.get(`/entities/list?id=`+id);
}

export function createEntities(object) {
    return axiosProvider.post('/entities/create', object);
}