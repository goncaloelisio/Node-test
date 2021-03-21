
const nodemailer = require ('nodemailer');
const { createDados } = require('../models');
require('dotenv').config();



const createUser = ( req, res) => {

    const { nome, email, data_de_nascimento, morada, localidade} = req.body;
    
    createDados(req,res);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        service: "gmail",
        type: "oauth2",
        auth: {
            user: "goncalo.elisio@waveweb2.com",
            pass: process.env.PASS
        }
      });

    let message = {
        from: 'goncalo.elisio@waveweb2.com',
        to: email,
        subject: 'Confirm Email',
        html: `<h1>Email de Confirmação de Novo Utilizador</h1>
               <span>Nome: ${req.body.nome}</span><br>
               <span>Data de Nascimento: ${req.body.data_de_nascimento}</span><br>
               <span>Morada: ${req.body.morada}</span><br> 
               <span>Localidade: ${req.body.localidade}</span>`
    };  

    transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
      });
}

module.exports = {
    createUser
};