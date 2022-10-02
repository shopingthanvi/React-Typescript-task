import { Link } from 'react-router-dom';
import { homePageRoute } from "./../utils/comman"
import { Header } from '../components';


const Home: React.FC = () => {
    return (
        <div>
            <Header label={"Code"} component={<ul className="c-header__items">
                {homePageRoute.map((router) => {
                    return (
                        <li key={router.id} className="c-header__item">
                            <Link to={router.route}>{router.label}</Link>
                        </li>
                    )
                })}
            </ul>} />

            <h1 style={{
                textAlign:"center"
            }}>Welcome code</h1>
        </div>
    );
}
export default Home;