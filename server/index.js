const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel= require('./models/users')
const cors = require ('cors')

app.use(express.json())
app.use(cors())

 mongoose.connect("mongodb+srv://abhijithsanthosh101:passwordsachu123@cluster0.zektcr1.mongodb.net/mern?retryWrites=true&w=majority");

 app.get("/getusers", async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/createUser",async(req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user)
    await newUser.save();

    res.json(user)
  })
  





app.listen(3001,()=>{
    console.log("SERVER RUNS PERFECTLY");
})