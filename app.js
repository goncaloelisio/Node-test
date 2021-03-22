const express = require("express");
const app = express();
const port = 3000;

const handlebars = require("express-handlebars");
const cors = require("cors");
const { createUser } = require('./src/controllers/index.controller');


app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('views', __dirname + '/src/views');
app.set('view engine', 'handlebars');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.render('formulario');
});

app.post('/utilizador',  (req,res) =>{
    createUser(req,res)
    res.render('dados', { nome, email, data_de_nascimento, morada, localidade} = req.body);

})


// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});