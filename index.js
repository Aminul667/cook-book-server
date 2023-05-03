const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const recipe = require('./data/recipe.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef server is running');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:chef_id', (req, res) => {
    const chef_id = parseInt(req.params.chef_id);
    const selectedChef = recipes.filter(n => n.chef_id === chef_id);
    res.send(selectedChef);
});

app.get('/chefs/recipe/:recipe_id', (req, res) => {
    const recipe_id = parseInt(req.params.recipe_id);
    const selectedRecipe = recipe.find(n => n.recipe_id === recipe_id);
    res.send(selectedRecipe);
});

app.listen(port, () => {
    console.log(`Chef API is running on the port: ${port}`);
});
