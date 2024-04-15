const Chat = require("../models/chatModel");
const Group = require("../models/groupModel");
const sequelize = require("../util/database");


const io = require("socket.io")(5000, {
  cors: {
    
    origin: "http://localhost:4500",
  },
});

//callback runs when a new client connects to the socket.io server
io.on("connection", (socket) => {                   //callback  runs when the server receives  a getMessages event
 
 
  socket.on("getMessages", async (groupName) => {
    try {
      //Find the group from the database
      const group = await Group.findOne({ where: { name: groupName } });

   
      const messages = await Chat.findAll({
        where: { groupId: group.dataValues.id },
      });

     
      socket.emit("messages", messages);
    } catch (err) {
      console.log(err);
    }
  });
});


exports.sendMessage = async (req, res, next) => {
  // Start a transaction
  const t = await sequelize.transaction();
  try {
 
    const groupName = req.body.groupName;
    const message = req.body.message;


    const user = req.user.name;            //extracting  name sent from auth.js  adding in route

    //Find group from db
    const group = await Group.findOne({
      where: { name: groupName },
    });

    
    const groupId = group.dataValues.id;

   
    const chatDB = await Chat.create(
      {
        name: user,
        message: message,
        userId: req.user.id,
        groupId: group.dataValues.id,
      },
      
      { transaction: t }
    );
  
    await t.commit();

    
    return res.status(200).json({ message: "Success!" });
  } catch (err) {
    console.log(err);
    //rolls back the transaction on failure
    await t.rollback();

    
    return res.status(500).json({ error: "Message delivery failed" });
  }
};
