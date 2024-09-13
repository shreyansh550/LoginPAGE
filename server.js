const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON data from the request body
app.use(express.json());

// Serve the HTML file for the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Append the username and password to a text file
    fs.appendFile('Information.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
        if (err) throw err;
        console.log('Username and password have been saved to the text file');
    });

    res.send(`Username is ${username}, Password is ${password}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
