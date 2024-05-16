const MessagesModel = require("../models/MessagesModel")

const messages_controller = {
    getAll:async(req,res)=>{
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
      },
    getOne:async(req,res)=>{
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
      },
    post:async(req,res)=>{
        const message = new MessagesModel(req.body)
        await message.save()
       res.send({
        message:"post",
        data:message
       })
      },
    delete:async(req,res)=>{
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
      },
    update:async(req,res)=>{ 
        const {id}=req.params;
      const message= await MessagesModel.findByIdAndUpdate(id,req.body);
      res.send({
        message:"update",
        data:message
      })
      }
}
module.exports = messages_controller