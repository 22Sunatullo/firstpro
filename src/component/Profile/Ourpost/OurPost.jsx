import React from 'react';
import s from './OurPost.module.css';
import Post from './post/Post';


const OurPost = (props) => {
    let posts = props.post.map(p => (<Post massage={p.massage} numberLi={p.numberLi} />));  
    let refForbutton = React.createRef();
    const ner = () => {
        let text = refForbutton.current.value;
        props.ad(text);
        console.log(1)
    }
    
    return (
     <div>
            <div>img-title</div>
            <div>
                <textarea ref={refForbutton}></textarea>
                <button  onClick={ner}>Add Post</button>

            </div>
            {posts}
        </div>
    );
};

export default OurPost;