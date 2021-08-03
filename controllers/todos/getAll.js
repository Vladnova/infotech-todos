
const {Todo}=require('../../models');

const getAll=async(req,res,next)=>{
    const {query,user}=req;
    try {
        const result=await Todo.find(query);
        const todos=result.filter(todo=>todo.userId.toString()===user._id.toString())

        if(user.isAdmin){
            return res.json({
                status:"success",
                code:200,
                data:{
                    result,
                }
            })

        }
        
        res.json({
            status:"success",
            code:200,
            data:{
                todos,
            }
        })
    } catch (error) {
        next(error)
    }
}


module.exports=getAll;