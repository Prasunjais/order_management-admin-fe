import { NODE_ENV } from '../configs/envConfig';

export const encode = (data: any) => {
    return NODE_ENV === 'production' ? window.btoa(data) : data;
};

export const decode = (data: any) => {
    return NODE_ENV === 'production' ? window.atob(data) : data;
};