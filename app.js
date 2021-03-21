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

app.post('/utilizador', ()=>{
    createUser
    .then(() =>{
        res.redirect('dados')
        
    }).catch((error) =>{
        res.send("Erro: Pagamento não foi cadastrado com sucesso!" + error)
    })
});


// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});