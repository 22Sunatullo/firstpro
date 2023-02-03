import OurPost from './Ourpost/OurPost';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
const Profile = (props) => {
    

    return (
        <div className={s.right}>
            <Profileinfo/>
            <OurPost post = {props.net} adpost = {props.adpost}/>
        </div>
    );
};

export default Profile;