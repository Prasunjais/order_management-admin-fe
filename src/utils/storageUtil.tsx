import { decode, encode } from './encryptionUtil';

const storageMechanism = window.sessionStorage; // or window.localStorage;

export const setItem = ({ key, value }: {
    key: string,
    value: string | undefined
}) => {
    const encodedValue = encode(JSON.stringify(value));
    storageMechanism.setItem(key, encodedValue);
};

export const getItem = (key: string) => {
    const value = storageMechanism.getItem(key);
    if (value) {
        return JSON.parse(decode(value));
    }

    return null;
};

export const removeItem = (key: string) => {
    storageMechanism.removeItem(key);
};

export const clearStorage = () => {
    return storageMechanism.clear();
};