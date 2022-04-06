import toast, { Toaster } from 'react-hot-toast';

const successAlert = ({ message }: {message:string}) => {
    return toast.success(message || 'Success !');
};

const errorAlert = ({ message }: { message: string }) => {
    try {
        console.log('ERROR TOAST');
        return toast.error(message || 'Error !');

    } catch (e) {
        console.error('--------->', e);
    }

};

export {
    successAlert,
    errorAlert,
};