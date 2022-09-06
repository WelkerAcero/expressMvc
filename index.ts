import express from "express";
import { ProductModel } from "./App/Models/ProductModel";

let obj = new ProductModel();
const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    /* console.log('Page index'); */
    let data = await obj.get_data("select * from products")
    res.send(data);
})

app.get('/products', (req, res) => {

    //Query a database
    //Process data
    //Validate data

    res.send('Product list')
})

app.post('/products', (req, res) => {
    res.send('Creating products')
})

app.put('/products', (req, res) => {
    res.send('Updating products')
})

app.delete('/products', (req, res) => {
    res.send('Deleted product')
})

app.patch('/products', (req, res) => {
    res.send('Updating a part of the product')
})

app.listen(3000, () => {
    console.log("Initialization server");
})
