import axiosProvider from './config/axios';

export function messageAssistant(object) {
    return axiosProvider.post('/assistant', object);
}