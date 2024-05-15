const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors")
const dotenv = require("dotenv");
dotenv.config();
const PORT = 5050;
const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UsersSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    profileImg: String,
    balance: Number,
  },
  { timestamps: true }
);
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    salePrice: Number,
    costPrice: Number,
    imgSrc: String,
    discountPercentage: Number,
    description: String,
    stockCount: Number,
  },
  { timestamps: true }
);
const OrdersSchema = new mongoose.Schema({
  userId: String,
  totalPrice: Number,
});

//models
const UsersModel = mongoose.model("Users", UsersSchema);
const ProductModel = mongoose.model("Product", ProductSchema);
const OrdersModel = mongoose.model("Orders", OrdersSchema);

//Crud
app.get("/api/users", async (req, res) => {
  const users = await UsersModel.find();

  if (users.length > 0) {
    res.send({
      message: "success",
      data: users,
    });
  } else {
    res.send({
      message: "data not found",
      data: null,
    });
  }
});
app.get("/api.users/:id", async(req,res)=>{
    const {id}= req.params['id']
    let user;
    try {
      user =await UsersModel.findById(id)
    }
    catch (error) {
        res.send({error:error})
    }
    if (user) {
        res.send({
            message:"success",
            data:user
        })
    }else{
        res.send({
            message:"not fount",
            data: null
        })
    }
})
app.post("/api/users", async(req, res)=>{
    console.log(req.body)
    const users = new UsersModel(req.body)
    await users.save()
    res.send({
        message:"success",
        data:users
    })
})
app.delete("/api/users/:id", async(req,res)=>{
    const {id} = req.params;
    let response;
    try {
        response = await UsersModel.findByIdAndDelete(id);   
        res.send({
            message:"deleted",
            data:response
        })
    } 
    catch (error) {
        console.log(error)
        res.send({
            error:error
        })  
    }
})
// app.path("/api/users/:id", async(req,res)=>{
//     const {id} = req.params;
//     const response = await UsersModel
// })






mongoose
  .connect("mongodb+srv://Amin:amin2004@cluster0.gyprxez.mongodb.net/")
  .then(() => console.log("Connected!"));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
