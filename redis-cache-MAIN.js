const redis = require('redis');
const app = require('express')();
const mongoose = require('mongoose');
const util = require('util');
const routeHan = require('./middleware/routeHandler')
const exec = mongoose.Query.prototype.exec;
mongoose.Query.prototype.exec = async function(){
    const key = JSON.stringify(Object.assign({},this.getQuery(),{
        collection:this.mongooseCollection.name
    }))
    const cachedVal = await client.get(key);
}
//CLEAR REDIS CACHE = flushAll()
app.get('/',async (req,res)=>{
    const redisURL = "redis://127.0.0.1:6379";
    const client = redis.createClient(redisURL)
    
    //Do we have cached data related to Query?
   client.get = util.promisify(client.get);
   const clientBlogs = await client.get('color');
    if(clientBlogs){
        res.send(clientBlogs)
    }else{
        //await Blog.find({'_user':'Sourav'})
        //Update redis
        client.set('_user','Sourav'); //Stringify before setting
        client.set('color','red','EX',3) //value will expire in 3secs
        res.send('Hi there. I am listening!');
    }
})

//Call Middleware after routeHandler execution->
app.get('/route-1',routeHan,(req,res,next)=>{
    console.log(new Date())
    res.send('I am called before');
})

app.listen('3000',()=>{
    console.log(
        "Sever Listening"
    );
})