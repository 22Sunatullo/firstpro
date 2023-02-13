const ADD_Post = 'ADD-POST';
const uppDatePost = 'UPDATE-NEW-POST';

const uppDateMessage = 'UPDATE-NEW-Message';
const ADD_Message = 'ADD-Message';

let store = {
  _Server: {
    profile: {
      postData: [
        { id: 1, massage: "Hi my name Sunatullo", numberLi: "185" },
        { id: 2, massage: "My last name Rajabov", numberLi: "800" },
      ],
      nawChane: "itcamasutra",
    },
    dialogPage: {
      messageData: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Sunatullo" },
        { id: 3, name: "Umar" },
        { id: 4, name: "Huseyn" },
        { id: 5, name: "Kobil" },
      ],
      dialogData: [
        { id: 1, massage: "Hi" },
        { id: 2, massage: "My name Sunatullo" },
        { id: 3, massage: "What is your name?" },
      ],
      newText: ''
    },
  },
  _callSubsriber() {
    console.log("Let");
  },

  getServer() {
    return this._Server;
  },
  subscriber(observer) {
    this._callSubsriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_Post) {
      let newPost = {
        id: 5,
        massage: this._Server.profile.nawChane,
        numberLi: Math.floor(Math.random() * 2000),
      };

      this._Server.profile.postData.push(newPost);
      this._Server.profile.nawChane = "";
      this._callSubsriber(this._Server);
    } else if (action.type === uppDatePost) {
      this._Server.profile.nawChane = action.postText;
      this._callSubsriber(this._Server);
    } else if(action.type === uppDateMessage){
      this._Server.dialogPage.newText = action.body; 
      this._callSubsriber(this._Server);
    } else if (action.type === ADD_Message){
      let body = this._Server.dialogPage.newText; 
      this._Server.dialogPage.newText = ''; 
      this._Server.dialogPage.dialogData.push({id: 4, massage: body}); 
      this._callSubsriber(this._Server);
    }
  },
};

export const addPostAction = () =>  ({type: ADD_Post})
export const uppDateNewPost = (interes) => {
  return{
      type: uppDatePost,
      postText: interes
  }
}

export const addMessageAction = () =>  ({type: ADD_Message})
export const uppDateNewMessage = (interes) => {
  return{
      type: uppDateMessage,
      body: interes
  }
}

window.Server = store;

export default store;
