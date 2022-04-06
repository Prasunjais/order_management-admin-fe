import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { OrderHeaderBase } from "./style";
import userImg from "../../assests/images/user.svg";
import { getItem } from "../../utils/storageUtil";
import { STORAGE_KEYS } from "../../constants/storageKeys";
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import { logout } from "../../services/authService";

export interface IOrderHeader {
    login?: boolean
}

/**
 * 
 * @returns {ReactElement}
 */
const OrderHeader: React.FC<IOrderHeader> = ({
    login
}) => {
    const [userId, setUserId] = useState("");

    // on page load
    useEffect(() => {
        let getUserDetails = JSON.parse(getItem(STORAGE_KEYS.USER_DETAILS));
        console.log('userId', getUserDetails);
        const { userId } = getUserDetails || {
            userId: undefined
        };
        setUserId(userId);
    }, [])

    return (
        <Fragment>
            <OrderHeaderBase>
                <div>
                    <img src={userImg} alt="user Image" />
                    <span className="projectEdit-header-userName">Welcome, {userId && userId || 'User'}</span>
                </div>
                <div>
                    <Link to="/" onClick={() => logout()} title={"Home"} >
                        <HomeIcon className="ms-1 logout-bottom" color="primary" fontSize='large'/>
                    </Link>
                    {login && <a className="logout-link" title={"Logout"} onClick={() => logout()} >
                        <ExitToAppTwoToneIcon className="ms-1 logout-bottom" />
                    </a>}
                </div>
            </OrderHeaderBase>
        </Fragment>
    )
}

export default OrderHeader;