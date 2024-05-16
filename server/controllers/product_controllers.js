const ProductModel = require("../models/ProductModel")

const product_controller ={
    getALL:async (req, res) => {
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
      },
    getOne: async (req, res) => {
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
      },
    post:async (req, res) => {
        const product = new ProductModel(req.body)
        await product.save()
        res.send({
          message: "post",
          data: product
        })
      },
    delete:async (req, res) => {
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
      },
    update:async(req,res)=>{
        const {id}= req.params;
        const response= await ProductModel.findByIdAndUpdate(id,req.body)
        res.send({
          message:"update",
          data:response
        })
      }
}
module.exports = product_controller