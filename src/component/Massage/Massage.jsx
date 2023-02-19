import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageAction, uppDateNewMessage } from '../../redux/massegereduser';
import Item from './Item/Item';
import d from './Massage.module.css';
import Messege from './Messege/Messege';


const Massage = (props) => {

    const ver = React.createRef();

    const massegeBody = (e) => {
        let body = e.target.value;
        props.store.dispatch(uppDateNewMessage(body));
    }

    const func = () => {
        props.store.dispatch(addMessageAction());
    }

    const newMessage = props.messag.map(ren => (<Item name={ren.name} id={ren.id} />));
    const newDialogData = props.dialog.dialogData.map(d => (<Messege send={d.massage} />));
    const newText = props.dialog.newText;


    return (
        <div className={d.Message}>
            <div className={d.massageDialoge}>
                <ul>
                    {newMessage}
                </ul>
            </div>
            <div className={d.massages}>
                <div> {newDialogData}</div>
                <div>
                    <input value={newText} type="text"
                        onChange={massegeBody}
                        placeholder='Send message'
                        ref={ver} />
                    <button type='button' onClick={func}>Add</button>
                </div>
            </div>
        </div>

    );
};

export default Massage;