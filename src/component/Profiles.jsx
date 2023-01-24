import c from './Profile.module.css';
const Profile = () => {
    return (
        <div className={c.right}>
            <div>
                <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
            </div>
            <div>img-title</div>
            <div>my-post</div>
            <div>new-post</div>
        </div>
    );
};

export default Profile;