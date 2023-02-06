import { renderEdidth } from "../render";

const Server = {
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
};

window.Server = Server;

export let addPost = (postMassage) => {
  let newPost = {
    id: 5,
    massage: Server.profile.nawChane,
    numberLi: Math.floor(Math.random() * 2000),
  };

  Server.profile.postData.push(newPost);
  Server.profile.nawChane = "";
  renderEdidth(Server);
};

export let update = (newText) => {
  Server.profile.nawChane = newText;
  renderEdidth(Server);
};

export default Server;
