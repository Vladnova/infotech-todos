const {Todo}=require('../../models');

const add = async (req, res, next) => {
  const {body, user}=req;
  console.log(req.user._id);
  
  try {
    const todo = await Todo.create({
      title:body.title,
      text:body.text,
      userId:user
    });

    res.status(201).json({
      status:"success",
      code:201,
      data:{
        result:todo
      }
    }) 
  } catch (error) {
   next(error)
  }
};

module.exports =add;