const express = require('express');
const app = express();
const { Client } = require("pg");
const client = new Client({
    user: "next.siyeon",
    host: "127.0.0.1",
    database: "postgres",
    password: "",
    port: 5432,
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
client.connect();

app.get('/update', (req, res) => {

    const query = `UPDATE meeting_room SET booked = true WHERE room_name = '${req.query.room}'`;
    console.log(query);
    client.query(query, (err, res) => {
        console.log(err, res);
    });
});

app.get('/false', (req, res) => {

    const query = `UPDATE meeting_room SET booked = 'false'`;
    console.log(query);
    client.query(query, (err, res) => {
        console.log(err, res);
    });
});