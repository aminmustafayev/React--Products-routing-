const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();
const PORT = 5050;
const bodyParser = require("body-parser");
const CONNECTION_STIRING = `mongodb+srv://amin:amin123@products.vqzarfi.mongodb.net/?retryWrites=true&w=majority&appName=Products`
const DB_USERNAME = 'amin';
const DB_PASSWORD = 'amin123'

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
//tamamlamaq yadda qalsin die 
const OrdersSchema = new mongoose.Schema({
  userId: String,
  totalPrice: Number,
  items:Array
},
{ timestamps: true }
);

//models
const UsersModel = mongoose.model("Users", UsersSchema);
const ProductModel = mongoose.model("Product", ProductSchema);
const OrdersModel = mongoose.model("Orders", OrdersSchema);

//Crud-users
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
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params
  let user;
  try {
    user = await UsersModel.findById(id)
  }
  catch (error) {
    res.send({ error: error })
    console.log(error)
  }
  if (user) {
    res.send({
      message: "success",
      data: user
    })
  } else {
    res.send({
      message: "not fount",
      data: null
    })
  }
})
app.post("/api/users", async (req, res) => {
  console.log(req.body)
  const users = new UsersModel(req.body)
  await users.save()
  res.send({
    message: "success",
    data: users
  })
})
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await UsersModel.findByIdAndDelete(id);
    res.send({
      message: "deleted",
      data: response
    })
  }
  catch (error) {
    console.log(error)
    res.send({
      error: error
    })
  }
})
app.patch("/api/users/:id", async(req,res)=>{
    const {id} = req.params;
    const response = await UsersModel.findByIdAndUpdate(id,req.body);
    res.send({
      message:"updated",
      data: response
    })  
})

//Crud-products
app.get("/api/products", async (req, res) => {
  const products = await ProductModel.find()
  if (products.length > 0) {
    res.send({
      message: "success",
      data: products
    })
  } else {
    res.send({
      message: 'not found',
      data: null
    })
  }
})
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let product
  try {
    product = await ProductModel.findById(id)
  } catch (error) {
    res.send({ error: error })
  } if (product) {
    res.send({
      message: 'success',
      data: product
    })
  }
  else {
    res.send({
      message: 'not found',
      data: null
    })
  }
})
app.post("/api/products", async (req, res) => {
  const product = new ProductModel(req.body)
  await product.save()
  res.send({
    message: "post",
    data: product
  })
})
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await ProductModel.findByIdAndDelete(id)
  } catch (error) {
    res.send({
      error: error
    })
  }
  res.send({
    message: "delete",
    data: response
  })
})
app.patch("/api/products/:id", async(req,res)=>{
  const {id}= req.params;
  const response= await ProductModel.findByIdAndUpdate(id,req.body)
  res.send({
    message:"update",
    data:response
  })
})



mongoose
  .connect(CONNECTION_STIRING)
  .then(() => console.log("Connected!"))
  .catch((error) => {
    console.log(error)
  });
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
