import axiosProvider from './config/axios';

export function listWorkspace() {
    return axiosProvider.get(`/workspace/list`);
}

export function createWorkspace(object) {
    return axiosProvider.post('/workspace/create', object);
}