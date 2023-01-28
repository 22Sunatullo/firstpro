import { NavLink } from 'react-router-dom';
import d from './Massage.module.css';

const Item = (props) => {
    let nameClass = "/Massage/" + props.id;
    return (
        <li><NavLink to={nameClass} >{props.name}</NavLink></li>
    );
}

const Messege = (props) => {
    return <div className="dialog">{props.send}</div>;
}

const Massage = () => {
    return (
        <div className={d.Message}>
            <div className={d.massageDialoge}>
                <ul>
                    <Item name="Sasha" id="1" />
                    <Item name="Sunatullo" id="2" />
                    <Item name="Umar" id="3" />
                    <Item name="Huseyn" id="4" />
                    <Item name="Kobil" id="5" />
                </ul>
            </div>
            <div className={d.massages}>
                <Messege send='Hi' />
                <Messege send='My name Sunatullo' />
                <Messege send='What is your name?' />
            </div>
        </div>
    );
};

export default Massage;