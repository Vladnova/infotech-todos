const {Todo}=require('../../models');

const getOne= async(req,res,next)=>{
    const {params, user}=req;

    try {
        const todo =await Todo.findById(params.todoId); 
        
        if(user.isAdmin){
           return res.json({
                status:'success',
                code:200,
                data:{
                    todo,
                }
            })
        }

        if(todo.userId.toString()!==user._id.toString()){
            return res.status(404).json({
                status: 'error',
                code:404,
                message:'Not found'
            })
        }

        res.json({
            status:'success',
            code:200,
            data:{
                todo,
            }
        })
    } catch (error) {
        next(error)
    }

}

module.exports=getOne;