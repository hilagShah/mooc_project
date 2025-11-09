const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Bina@123',
    database: 'MOOC_DATABASE'
});

app.post('/UserEntries', (req, res) => {
    const { Name, Email, Password, ConfirmPassword } = req.body;
    const sqlInsert = "INSERT INTO UserEntries (Name, Email, Password, ConfirmPassword) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [Name, Email, Password, ConfirmPassword], (err) => {
        if (err) {
            console.log(err);
            res.status(500).json('Error inserting data into database');
        } else {
            res.json('Data inserted successfully');
        }
    }  
);
});

app.post('/Login', (req, res) => {
    const { Email, Password } = req.body;
    const sqlSelect = "SELECT * FROM UserEntries WHERE Email = ? AND Password = ?";
    db.query(sqlSelect, [Email, Password], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json('Error querying database');
        } else {
            if (result.length > 0) {
                res.json('Login successful');
            } else {
                res.status(401).json('Invalid email or password');
            }
        }
    });
}
);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
}
);