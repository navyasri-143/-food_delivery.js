const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const PORT = 3000; 
// Middleware to parse JSON and form data 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
// Sample restaurant menu 
const menu = { 
"Pizza": 200, 
"Burger": 150, 
"Pasta": 180, 
"Sandwich": 100 
}; 
// Serve the order form 
app.get('/', (req, res) => { 
    res.send(` 
        <h2>Food Delivery Order Form</h2> 
        <form action="/order" method="POST"> 
            <label for="name">Name:</label> 
            <input type="text" name="name" required><br><br> 
 
            <label for="food">Choose Food:</label> 
            <select name="food"> 
                <option value="Pizza">Pizza - ₹200</option> 
                <option value="Burger">Burger - ₹150</option> 
                <option value="Pasta">Pasta - ₹180</option> 
                <option value="Sandwich">Sandwich - ₹100</option> 
            </select><br><br> 
 
            <button type="submit">Place Order</button> 
        </form> 
    `); 
}); 
 
// Handle food order 
app.post('/order', (req, res) => { 
    const { name, food } = req.body; 
    const price = menu[food]; 
 
 
 
if (price)  
{ 
res.send(`<h2>Thank you, ${name}!</h2><p>Your order for ${food} has been placed 
successfully.</p><p>Total Cost: ₹${price}</p>`); 
} 
else  
{ 

res.send('<h2>Invalid food selection. Please try again.</h2>'); 
} 
});
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`); 
}); 