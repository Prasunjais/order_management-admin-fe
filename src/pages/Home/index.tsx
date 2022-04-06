import {
    HomeBase
} from './style';
import Homepage from '../../containers/HomePage/Homepage';
/**
 * 
 * @returns {ReactElement} 
 */
const Home = ({ }) => {
    console.log('called in home');
    return (
        <HomeBase>
            <Homepage />
        </HomeBase>
    )
}

export default Home;
