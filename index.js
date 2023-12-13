
const express = require('express');
const app = express();
const port = 3000;
const ecommerce = require('./ecommerceroute'); 
const password = require('./passwordstrength');
app.use('/main', ecommerce);
app.use('/passwordstrength', password);
app.use((req,res )=>{
    res.send("welcome! for ecommerce /main/products for password write /passwordstrength");
});
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
});
