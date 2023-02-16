const uppDateMessage = "UPDATE-NEW-Message";
const ADD_Message = "ADD-Message";

let initials = {
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
}


const massegeeReduser = (Server = initials, action) => {
  switch (action.type) {
    case uppDateMessage:
      Server.newText = action.body;
      return Server;
    case ADD_Message:
      let body = Server.newText;
      Server.newText = "";
      Server.dialogData.push({ id: 4, massage: body });
      return Server;
    default:
      return Server;
  }
};


export const addMessageAction = () =>  ({type: ADD_Message})
export const uppDateNewMessage = (interes) => {
  return{
      type: uppDateMessage,
      body: interes
  }
}

export default massegeeReduser;
