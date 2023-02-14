const ADD_Post = 'ADD-POST';
const uppDatePost = 'UPDATE-NEW-POST';

const profileReduser = (state, action) =>{
    if (action.type === ADD_Post) {
        let newPost = {
          id: 5,
          massage: state.profile.nawChane,
          numberLi: Math.floor(Math.random() * 2000),
        };
  
        state.profile.postData.push(newPost);
        state.profile.nawChane = "";
      } else if (action.type === uppDatePost) {
        state.profile.nawChane = action.postText;
      }

    return state;
}

export default profileReduser;