import { NavLink } from 'react-router-dom';
import Item from './Item/Item';
import d from './Massage.module.css';
import Messege from './Messege/Messege';


const Massage = () => {

    let messageData = [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Sunatullo" },
        { id: 3, name: "Umar" },
        { id: 4, name: "Huseyn" },
        { id: 5, name: "Kobil" }
    ]
    let dialogData = [
        { id: 1, massage: "Hi" },
        { id: 2, massage: "My name Sunatullo" },
        { id: 3, massage: "What is your name?" },
    ]

    let newMessage = messageData.map(ren => (<Item name={ren.name} id={ren.id} />));
    let newDialogData = dialogData.map(d => (<Messege send={d.massage} />))

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

        </div>

    );
};

export default Massage;