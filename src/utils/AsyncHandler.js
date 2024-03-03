// const asyncHandeler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.send(err.code|| 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
const asyncHandeler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>
        next(err))
    }
}
export {asyncHandeler}