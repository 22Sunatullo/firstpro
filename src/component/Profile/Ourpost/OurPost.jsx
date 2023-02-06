import React from 'react';
import s from './OurPost.module.css';
import Post from './post/Post';


const OurPost = (props) => {
    let posts = props.post.map(p => (<Post massage={p.massage} numberLi={p.numberLi} />));
    let refForbutton = React.createRef();
    const ner = () => {
        props.ad();
    }
    const onchangeEng = () => {
        let text = refForbutton.current.value;
        props.update(text);
    }

    return (
        <div>
            <div>img-title</div>
            <div>
                <textarea ref={refForbutton} onChange={onchangeEng} value={props.nawChane} />
                <button onClick={ner}>Add Post</button>

            </div>
            {posts}
        </div>
    );
};

export default OurPost;