import s from './OurPost.module.css';
import Post from './post/Post';
const OurPost = () => {
    return (
        <div>
            <div>img-title</div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
                <button>Remove</button>

            </div>
            <Post massage = 'Hi my name Sunatullo' numberLi = '185'/>
            <Post massage = 'My last name Rajabov' numberLi = '800'/>
        </div>
    );
};

export default OurPost;