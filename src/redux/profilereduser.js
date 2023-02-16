const ADD_Post = "ADD-POST";
const uppDatePost = "UPDATE-NEW-POST";

let initials = {
  postData: [
    { id: 1, massage: "Hi my name Sunatullo", numberLi: "185" },
    { id: 2, massage: "My last name Rajabov", numberLi: "800" },
  ],
  nawChane: "itcamasutra",
}

const profileReduser = (state = initials, action) => {
  switch (action.type) {
    case ADD_Post:
      let newPost = {
        id: 5,
        massage: state.nawChane,
        numberLi: Math.floor(Math.random() * 2000),
      };

      state.postData.push(newPost);
      state.nawChane = "";
      return state;
    case uppDatePost:
      state.nawChane = action.postText;
      return state;
    default:
      return state;
  } 
};

export const addPostAction = () =>  ({type: ADD_Post})
export const uppDateNewPost = (interes) => {
  return{
      type: uppDatePost,
      postText: interes
  }
}

export default profileReduser;
