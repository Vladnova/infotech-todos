const {Todo}=require('../../models');

const remove=async(req,res,next)=>{
    const {params,user}=req;

    try {

        if(user.isAdmin){
            await Todo.findByIdAndRemove(params.todoId)
            return res.json({
                status:'success',
                code:200,
                message:'Todo deleted'
            });
        };

        const todo=await Todo.findById(params.todoId);

        if(todo.userId.toString()!==user._id.toString()){
            return res.status(404).json({
                status: 'error',
                code:404,
                message:'Not found'
            })
        }

        await Todo.findByIdAndRemove(params.todoId);
        return res.json({
            status:'success',
            code:200,
            message:'Todo deleted'
        })
    } catch (error) {
        next(error)
    }

}

module.exports=remove;