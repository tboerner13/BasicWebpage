require('dotenv').config();
const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//POSTGRESQL Connections...
const pool_personal = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PERSONAL,
    port: process.env.DB_PORT,
});

const pool_hobbies = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_HOBBIES,
    port: process.env.DB_PORT,
});

//GET all personal info
app.get("/personal_json", async (req, res)=>{
    try{
        const result = await pool_personal.query("SELECT * FROM personal_info");
        res.json(result.rows);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

//GET all hobbies
app.get("/hobbies_json", async (req, res)=>{
    try{
        const result = await pool_hobbies.query("SELECT * FROM hobbies_table");
        res.json(result.rows);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

//POST
app.post("/personal_json", async(req, res) => {
    try{
        const {name, email, phone_number} = req.body;
        
        //Insert data
        const result = await pool_personal.query(
            "INSERT INTO personal_info (name, email, phone_number) VALUES ($1, $2, $3) RETURNING *",
            [name, email, phone_number]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

app.post("/hobbies_json", async(req, res) => {
    try{
        const {hobby} = req.body;
        
        //Insert data
        const result = await pool_hobbies.query(
            "INSERT INTO hobbies_table (hobby) VALUES ($1) RETURNING *",
            [hobby,]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`));