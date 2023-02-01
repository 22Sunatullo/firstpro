import React from 'react';
import { NavLink } from 'react-router-dom';
import Item from './Item/Item';
import d from './Massage.module.css';
import Messege from './Messege/Messege';


const Massage = (props) => {

    const ver = React.createRef();

    const func = () =>{
        const newtext = ver.current.value;
        alert(newtext)
    }

    const newMessage = props.messag.map(ren => (<Item name={ren.name} id={ren.id} />));
    const newDialogData = props.dialog.map(d => (<Messege send={d.massage} />));

    return (
        <div className={d.Message}>
            <div className={d.massageDialoge}>
                <ul>
                    {newMessage}
                </ul>
            </div>
            <div className={d.massages}>
                {newDialogData}
            </div>
            <input type="text" ref={ver} />
            <button type='button' onClick={func}>Add</button>
        </div>

    );
};

export default Massage;