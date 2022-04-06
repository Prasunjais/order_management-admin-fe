import { Fragment } from 'react';
import { LoginPageBase } from './style';
import LoginContainer from '../../containers/LoginContainer/Login';

/**
 * 
 * @returns {ReactElement}
 */
function Login() {
    return (
        <Fragment>
            <LoginPageBase>
                <LoginContainer />
            </LoginPageBase>
        </Fragment>
    )
}

export default Login
