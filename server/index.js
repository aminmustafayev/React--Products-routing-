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
const OrdersSchema = new mongoose.Schema({
  userId: String,
  totalPrice: Number,
  items:Array
},
{ timestamps: true }
);
const MessagesSchema = new mongoose.Schema({
  fullName:String,
  email:String,
  title:String,
  message:String
},
{ timestamps: true }
);
const CategorySchema= mongoose.Schema({
  name: String
},
{timestamps:true}
)

//models
const UsersModel = mongoose.model("Users", UsersSchema);
const ProductModel = mongoose.model("Product", ProductSchema);
const OrdersModel = mongoose.model("Orders", OrdersSchema);
const MessagesModel = mongoose.model("Messages",MessagesSchema);
const CategoryModel = mongoose.model("Category",CategorySchema)

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
    res.send({error: error})
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
});

//Crud - orders
app.get("/api/orders", async(req,res)=>{
  const order = await OrdersModel.find()
  if (order.length>0) {
    res.send({
      message:"success",
      data:order
    })
  }
  else{
    res.send({
      message:'not fount',
      data:null
    })
  }
})
app.get("/api/orders/:id", async(req,res)=>{
  const {id} = req.params;
  let order;
  try {
  order=await OrdersModel.findById(id)  
  } 
  catch (error) {
    res.send({error:error})
  }
  if (order) {
    res.send({
      message:'success',
      data:order
    })
  }
  else{
    res.send({
      message:"not found",
      data:null
    })
  }
})
app.post("/api/orders", async(req,res)=>{
  const order = new OrdersModel(req.body)
  await order.save()
  res.send({
    message:"post",
    data:order
  })
})
app.delete("/api/orders/:id", async(req,res)=>{
const {id}= req.params
let order
try {
  order = await OrdersModel.findOneAndDelete(id)
} catch (error) {
  res.send({error:error})
}
res.send({
  message:"delete",
  data:order
})
})
app.patch("/api/orders/:id", async(req,res)=>{
  const {id}= req.params
  const order = await OrdersModel.findByIdAndUpdate(id,req.body);
res.send({
  message:"update",
  data:order
})
})

//Crud - messages
app.get("/api/messages",async(req,res)=>{
  const message = await MessagesModel.find()
  if (message.length>0) {
    res.send({
      message:"success",
      data:message
    })
  }else{
    res.send({
      message:"not fount",
      data:null
    })
  }
})
app.get("/api/messages/:id",async(req,res)=>{
  const {id}=req.params
  let message;
  try {
    message=await MessagesModel.findById(id)
  } catch (error) {
    res.send({error:error})
  }
  if(message){
    res.send({
      message:'success',
      data:message
    })
  }
  else{
    res.send({
      message:"not fount",
      data:null
    })
  }
})
app.post("/api/messages",async(req,res)=>{
  const message = new MessagesModel(req.body)
  await message.save()
 res.send({
  message:"post",
  data:message
 })
})
app.delete("/api/messages/:id",async(req,res)=>{
  const {id} = req.params
  let message;
  try {
    message=await MessagesModel.findByIdAndDelete(id)
  } catch (error) {
    res.send({error:error})
  }
  res.send({
    message:"delete",
    data:message
  })
})
app.patch("/api/messages/:id", async(req,res)=>{ 
  const {id}=req.params;
const message= await MessagesModel.findByIdAndUpdate(id,req.body);
res.send({
  message:"update",
  data:message
})
})

//Crud - category
app.get("/api/category",async(req,res)=>{
  const category = await CategoryModel.find()
  if (category.length>0) {
    res.send({
      message:"success",
      data:category
    })
  }else{
    res.send({
      message:"not found",
      data:null
    })
  }
})
app.get("/api/category/:id", async(req,res)=>{
  const {id}= req.params
  let category
  try {
    category= await CategoryModel.findById(id)
  } catch (error) {
    res.send({error:error})
  }
  if (category) {
    res.send({
      message:"success",
      data:category
    })
  }
})
app.post("/api/category", async(req,res)=>{
  const category = new CategoryModel(req.body)
  await category.save()
  res.send({
    message:"post",
    data:category
  })
})
app.delete("/api/category/:id", async(req,res)=>{
  const {id}= req.params
  let category
  try {
    category = await CategoryModel.findByIdAndDelete(id)
  } catch (error) {
    res.send({error:error})
  }
  res.send({
    message:"delete",
    data:category
  })
})
app.patch("/api/category/:id", async(req,res)=>{  
  const {id}=req.params
  const category = await CategoryModel.findByIdAndUpdate(id
    ,req.body
  ) 
  res.send({
    message:"update",
    data:category
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
