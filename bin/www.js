import app  from '../app';
import open     from    'open';
import dotenv   from    'dotenv';

dotenv.load();

const host  = process.env.HOST;
const port  = process.env.PORT;

app.listen(port, host, (err)=>{
    if(err){
        console.log(err);
    } else {
        //open("http://" + host + ":8081");
        console.log("Server listening on " + host + ":" + port);
    }
});