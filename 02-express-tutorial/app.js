// console.log('Express Tutorial')

const express = require('express');
const { products } = require('./data');
const app = express();
const people = require('./data.js')
const peopleRouter = require('./routes/people');


const logger = (req, res, next) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.method} ${req.url}`);
    next();
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logger);

app.use(express.static("./methods-public"));

app.get('/', logger, (req, res) => {
    res.send('Welcome to the home page');
});

app.get('/api/v1/test', logger, (req, res) => {
    res.json({ message: 'It worked!' });
});

app.get('/api/v1/test', logger, (req, res) => {
    res.json(products);
});

app.get('/api/v1/test', logger, (req, res) => {
    res.json(req.params);
});

app.get('/api/v1/products/:productID', logger, (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "That product was not found." });
    }
});

app.get('/api/v1/query', logger, (req, res) => {
    const { search, limit } = req.query;
    let filteredProducts = products;

    if (search) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().startsWith(search.toLowerCase())
        );
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }

    res.json(filteredProducts);
});

app.use("/api/v1/people", peopleRouter);


app.get('/api/v1/people', (req, res) => {
    res.json(people);
});

app.post('/api/v1/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, name });
});

app.all('*', logger, (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(3000)