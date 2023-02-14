const uppDateMessage = "UPDATE-NEW-Message";
const ADD_Message = "ADD-Message";

const massegeeReduser = (Server, action) => {
  if (action.type === uppDateMessage) {
    Server.dialogPage.newText = action.body;

  } else if (action.type === ADD_Message) {
    let body = Server.dialogPage.newText;
    Server.dialogPage.newText = "";
    Server.dialogPage.dialogData.push({ id: 4, massage: body });
  }

  return Server;
};

export default massegeeReduser;
