const { Client } = require("pg");
const client = new Client({
    user: "next.siyeon",
    host: "127.0.0.1",
    database: "postgres",
    password: "",
    port: 5432,
});
client.connect();

client.query("UPDATE meeting_room SET booked = false WHERE room_name = '1F Conf'", (err, res) => {
    console.log(err, res);
    client.end();
});