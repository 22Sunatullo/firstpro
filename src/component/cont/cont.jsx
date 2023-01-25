import c from './cont.module.css';

const Cont = () => {
    return (
        <div className={c.leftconcat}>
            <ul>
                <li><a href="/Profile">Home</a></li>
                <li><a href="/Massage">Massage</a></li>
                <li><a>Menu</a></li>
            </ul>
        </div>
    );
};

export default Cont;