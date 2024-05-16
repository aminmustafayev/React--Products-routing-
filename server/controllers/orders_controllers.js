const OrdersModel = require("../models/OrdersModel")

const orders_controller ={
    getAll:async(req,res)=>{
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
      },
    getOne:async(req,res)=>{
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
      },
    post:async(req,res)=>{
        const order = new OrdersModel(req.body)
        await order.save()
        res.send({
          message:"post",
          data:order
        })
      },
    delete:async(req,res)=>{
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
        },
    update:async(req,res)=>{
        const {id}= req.params
        const order = await OrdersModel.findByIdAndUpdate(id,req.body);
      res.send({
        message:"update",
        data:order
      })
      }
}

module.exports=orders_controller