import OurPost from './Ourpost/OurPost';
import s from './Profile.module.css';
const Profile = () => {
    return (
        <div className={s.right}>
            <div>
                <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
            </div>
            <OurPost/>
        </div>
    );
};

export default Profile;