import { NavLink } from 'react-router-dom';
import d from './../Massage.module.css';

const Item = (props) => {
    let nameClass = "/Massage/" + props.id;
    return (
        <li><NavLink to={nameClass} >{props.name}</NavLink></li>
    );
}


export default Item;