const { Pool } = require('pg');


const pool = new Pool ({
    host: 'localhost',
    user: 'bobl_wave',
    password: 'waveweb',
    database: 'bobl',
    port: '5432'
});
    const createDados = async ( req, res) => {
    
        const { nome, email, data_de_nascimento, morada, localidade} = req.body;
        
        
        const response = await pool.query('INSERT INTO users (nome, email, data_de_nascimento, morada, localidade) VALUES ($1, $2, $3, $4, $5) RETURNING id', [nome, email, data_de_nascimento, morada, localidade],(error, results) => {
            if (error) {
              throw error
            }
            res.status(201).send(`User added with ID: ${results.rows[0].id}`);
        });
    };

module.exports = {createDados};