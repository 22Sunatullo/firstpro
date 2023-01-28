import { NavLink } from 'react-router-dom';
import c from './cont.module.css';

const Cont = () => {
    return (
        <div className={c.leftconcat}>
            <ul>
                <li><NavLink to="/Profile">Home</NavLink></li>
                <li><NavLink to="/Massage">Massage</NavLink></li>
                <li><NavLink to='/Music'>Music</NavLink></li>
                <li><NavLink to='/News'>News</NavLink></li>
            </ul>
        </div>
    );
};

export default Cont;