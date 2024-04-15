
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");


dotenv.config();


const sequelize = require("./util/database");



const User = require("./models/userModel");
const Chat = require("./models/chatModel");
const Group = require("./models/groupModel");
const UserGroup = require("./models/userGroup");


const userRouter = require("./router/userRouter");
const homePageRouter = require("./router/homePageRouter");
const chatRouter = require("./router/chatRouter");
const groupRouter = require("./router/groupRouter");




app.use(express.static("public"));

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(bodyParser.json());


app.use("/", userRouter);
app.use("/user", userRouter);
app.use("/homePage", homePageRouter);
app.use("/chat", chatRouter);
app.use("/group", groupRouter);




User.hasMany(Chat, { onDelete: "CASCADE" });
Chat.belongsTo(User);


User.hasMany(UserGroup);
UserGroup.belongsTo(User);


Group.hasMany(Chat);
Chat.belongsTo(Group);


Group.hasMany(UserGroup);
UserGroup.belongsTo(Group);





sequelize.sync().then((result) => {
  app.listen(4500);
});
