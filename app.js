import express  from    'express';
import path     from    'path';

const app   = express();

app.use('/public', express.static(path.resolve('src/public')));

app.set('views', path.resolve('src/views'));
app.set("view engine", "pug");

app.get('/', (req, res)=>{
    res.render('index');
});

export default app;