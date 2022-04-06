import Logo from '../../assests/images/ximkart.png';
import { Fragment } from "react";
import { useForm, Resolver } from "react-hook-form";
import { LoginCnt } from "./style"
import { Container, Row, Col } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../utils/auth';
import {
    login
} from '../../services/authService';

interface FormValues {
    userId: string,
    password: string
}

const resolver: Resolver<FormValues> = async (values) => {
    let errors = {};
    if (!values.userId) {
        errors = {
            ...errors,
            userId: {
                type: "required",
                message: 'User Id is required !'
            }
        }
    } else if (!values.password) {
        errors = {
            ...errors,
            password: {
                type: "required",
                message: 'Password is required !'
            }
        }
    }

    
    return {
        values: values,
        errors: errors
    };
};

/**
 * 
 * @returns {ReactElement}
 */
const LoginContainer: React.FC = () => {
    const auth = useAuth()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: resolver
    });

    // submitting the form 
    const onSubmit = handleSubmit(async(data) => {
        let isLoggedIn = await login({
            userId: data.userId,
            password: data.password
        });
        auth.signin(isLoggedIn);
        // if login is success
        if (isLoggedIn) {
            navigate(`/order/status`);
        }
    });
    
    return (
        <Fragment>
            <LoginCnt>
                <Container fluid>
                    <Row>
                        <Col className="login-section" md={{ span: 6, offset: 0 }}>
                            <span className="dot-login"></span>
                            <img className="comp-logo-login" src={Logo} alt="Comp Logo" />
                            <p className="login-hed">Ximkart's Order Management</p>
                        </Col>
                        <Col className="login-form-wrap ps-5" md={6}>
                            <p className="login-text mt-5 display-2">Log In </p>
                            <hr className="bylineHeader-blue" />
                            <br />
                            <p className="lead display-6">Please fill below details to log in</p>
                            <br />
                            <form onSubmit={onSubmit}> 
                                <div>
                                    <label className="input-label display-6"><b>User Id</b></label>
                                    <input type="text" {...register("userId")} className="input-text" placeholder="Enter User Id" />
                                    {errors?.userId && <p className="error-tag">{errors.userId.message}</p>}
                                </div>
                                <div>
                                    <label className="input-label display-6"><b>Password</b></label>
                                    <input type="password" {...register("password")} className="input-text" placeholder="Enter Password" />
                                    {errors?.password && <p className="error-tag">{errors.password.message}</p>}
                                </div>
                                <input className="submit-btn" type="submit" value={"Login Now !"} /> 
                            </form>
                        </Col>  
                    </Row>
                    <Link to="/">
                        <HomeIcon color='success' className="login-page-homeIcon" fontSize='large' />
                    </Link>
                </Container>
            </LoginCnt>
        </Fragment>
    )
}

export default LoginContainer;
