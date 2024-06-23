import React from "react";

const ChatList = ({
  w = "100%",
  chats = ["hello","hii","by, kese ho", "khana khaya", "biryani banegi kal"],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <>
      <div className="grid grid-flow-row">
        {chats?.map((data) => {
          return <div>{data}</div>;
        })}
      </div>
    </>
  );
};

export default ChatList;