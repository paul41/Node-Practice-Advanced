module.exports = async (req,res,next)=>{
    
    await next();
    console.log('-> ',new Date())
    console.log('Called after routes execution')
}