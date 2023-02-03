const Server = {
  postData: [
    { id: 1, massage: "Hi my name Sunatullo", numberLi: "185" },
    { id: 2, massage: "My last name Rajabov", numberLi: "800" },
  ],
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

export let addPost = (postMassage) => {
  let newPost = {
    id: 5,
    massage: postMassage,
    numberLi: Math.floor(Math.random() * 2000),
  };

  Server.postData.push(newPost);
};

export default Server;
