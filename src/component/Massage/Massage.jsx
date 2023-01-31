import { NavLink } from 'react-router-dom';
import Item from './Item/Item';
import d from './Massage.module.css';
import Messege from './Messege/Messege';


const Massage = (props) => {

 

    let newMessage = props.messag.map(ren => (<Item name={ren.name} id={ren.id} />));
    let newDialogData = props.dialog.map(d => (<Messege send={d.massage} />));

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