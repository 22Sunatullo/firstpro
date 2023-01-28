import OurPost from './Ourpost/OurPost';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
const Profile = () => {
    return (
        <div className={s.right}>
            <Profileinfo/>
            <OurPost/>
        </div>
    );
};

export default Profile;