const express = require("express")
const app = express()

//Sample Data
const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
];

const products = [
    {id: 1, name: 'Laptop', price: 999},
    {id: 2, name: 'Phone', price: 699}
];

const fruits = [
    {id: 1, name: 'Apple', price: 3},
    {id: 2, name: 'Kiwi', price: 2}
];

const utensils = [
    {id: 1, name: 'Fork', metal: 'sterling silver'},
    {id: 2, name: 'Spoon', metal: 'stainless steel'}
];

const cars = [
    {id: 1, make: 'Buick', model: 'Encore', year: 2020, color: 'silver'},
    {id: 2, make: 'Kia', model: 'Soul', year: 2019, color: 'red'}
];

const pets = [
    {id: 1, type: 'Dog', name: 'Beethoven'},
    {id: 2, type : 'Cat', name: 'Mozart'}
];



//Routing...

app.get('/', (req, res) => 
    res.send('Welcome to my API!')); //front slash is landing page/home page

app.get('/users', (req, res) => 
    res.json(users));

app.get('/products', (req, res) =>
    res.json(products));

app.get('/products/fruits', (req, res) =>
    res.json(fruits));
app.get('/products/utensils', (req, res) =>
    res.json(utensils));
app.get('/cars', (req, res) =>
    res.json(cars));
app.get('/pets', (req, res) =>
    res.json(pets));

//Start server...
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));