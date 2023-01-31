import s from './OurPost.module.css';
import Post from './post/Post';
const OurPost = (props) => {
  

    let posts = props.post.map(p => (<Post massage = {p.massage} numberLi = {p.numberLi}/>))
    return (
        <div>
            <div>img-title</div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
                <button>Remove</button>

            </div>
            {posts}
        </div>
    );
};

export default OurPost;