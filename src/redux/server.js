import massegeeReduser from "./massegereduser";
import profileReduser from "./profilereduser";

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
    this._Server.profile = profileReduser(this._Server.profile, action);
    this._Server.dialogPage = massegeeReduser(this._Server.dialogPage, action);
    this._callSubsriber(this._Server);
  }
};

window.Server = store;

export default store;
