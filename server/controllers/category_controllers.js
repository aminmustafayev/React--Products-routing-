const CategoryModel = require("../models/CategoryModel")

const category_controller={
    getAll:async(req,res)=>{
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
      },
    getOne:async(req,res)=>{
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
      },
    post:async(req,res)=>{
        const category = new CategoryModel(req.body)
        await category.save()
        res.send({
          message:"post",
          data:category
        })
      },
    delete: async(req,res)=>{
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
      },
    update: async(req,res)=>{  
        const {id}=req.params
        const category = await CategoryModel.findByIdAndUpdate(id
          ,req.body
        ) 
        res.send({
          message:"update",
          data:category
        })
      }
}
module.exports = category_controller