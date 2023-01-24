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
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default OurPost;