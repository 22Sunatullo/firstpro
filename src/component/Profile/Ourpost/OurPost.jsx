import s from './OurPost.module.css';
import Post from './post/Post';
const OurPost = () => {
    let postData =[
        {id: 1, massage: 'Hi my name Sunatullo', numberLi:'185'},
        {id: 2, massage: 'My last name Rajabov', numberLi:'800'},
    ]

    let posts = postData.map(p => (<Post massage = {p.massage} numberLi = {p.numberLi}/>))
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