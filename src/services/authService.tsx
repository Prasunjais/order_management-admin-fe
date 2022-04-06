import { getItem, clearStorage, setItem } from "../utils/storageUtil";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { successAlert } from "../utils/toast";
import history from "../utils/history";

// user login 
export const login = async (data: {
    userId: string,
    password: string
}) => {
    // if user is logged in successfully
    clearStorage();
    setItem({
        key: STORAGE_KEYS.ACCESS_TOKEN,
        value: JSON.stringify({
            data
        }) || 'N/A'
    });
    setItem({
        key: STORAGE_KEYS.USER_DETAILS,
        value: JSON.stringify({
            ...data,
            userName: 'admin'
        }) || 'N/A'
    })
    // return isLoggedIn Object
    return data;
};

export const logout = async () => {
    clearStorage();
    successAlert({
        message: 'User Logged Out!'
    })
    history.push('/');
    setTimeout(() => window.location.reload(), 500)

};