import { NavBarBase, NavItem } from './style';
import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../assests/images/ximkart.png';
import { Stack } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

/**
 * 
 * @params [role] - User Role
 * 
 * @returns {ReactElement}
 */
const OrderNavbar = ({
    toggle
}: {
    toggle: boolean
    }): JSX.Element => {
    const { user } = useParams();
    return (
        <NavBarBase>
            <Row>
                <img src={Logo} className="navBarLogo mt-5" />
                <h1 className='navBarHed mx-auto text-center my-4'>Ximkart's Order Management</h1>
                <br />
                <Stack spacing={2} className='navBar-Stack'>
                    <Link to={`/order/status`}>
                        <NavItem active={(window.location.pathname == `/order/status`)}>
                            <RemoveRedEyeIcon />
                            <span className='ms-3'>Order Summary</span>
                        </NavItem>
                    </Link>
                    <Link to={`/order/place`}>
                        <NavItem active={(window.location.pathname == `/order/place`)}>
                            <AccountTreeIcon />
                            <span className='ms-3'>Place Order</span>
                        </NavItem>
                    </Link>
                    <Link to={`/order/top-5`}>
                        <NavItem active={(window.location.pathname == `/order/top-5`)}>
                            <NotificationsIcon />
                            <span className='mx-3'>Top 5 Products</span>
                        </NavItem>
                    </Link>
                    <Link to={`/order/check`}>
                        <NavItem active={(window.location.pathname == `/order/check`)}>
                            <AccountBalanceIcon />
                            <span className='ms-3'>Orders</span>
                        </NavItem>
                    </Link>
                </Stack>
            </Row>
        </NavBarBase>
    )
}

export default OrderNavbar;
