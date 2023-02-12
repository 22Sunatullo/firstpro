let store = {
  _Server: {
    profile: {
      postData: [
        { id: 1, massage: "Hi my name Sunatullo", numberLi: "185" },
        { id: 2, massage: "My last name Rajabov", numberLi: "800" },
      ],
      nawChane: "itcamasutra",
    },

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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        massage: this._Server.profile.nawChane,
        numberLi: Math.floor(Math.random() * 2000),
      };

      this._Server.profile.postData.push(newPost);
      this._Server.profile.nawChane = "";
      this._callSubsriber(this._Server);
    } else if (action.type === 'UPDATE-NEW-POST') {
      this._Server.profile.nawChane = action.newText;
      this._callSubsriber(this._Server);
    }
  },
};

window.Server = store;

export default store;
