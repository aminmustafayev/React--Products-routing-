const UsersModel = require("../models/UsersModel")

const user_controller={
    getALL:async (req, res) => {
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
      },
    getOne:async (req, res) => {
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
      },
    delete:async (req, res) => {
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
      },
    post: async (req, res) => {
        console.log(req.body)
        const users = new UsersModel(req.body)
        await users.save()
        res.send({
          message: "success",
          data: users
        })
      },
    update:async(req,res)=>{
        const {id} = req.params;
        const response = await UsersModel.findByIdAndUpdate(id,req.body);
        res.send({
          message:"updated",
          data: response
        })  
    }
}
module.exports = user_controller