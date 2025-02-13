// it is used to initialize the sample data to the database

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Motu",
        to: "Chai wle Bhaiya",
        message: "Samosa khila do bhaiya",
        created_at: new Date()
    },
    {
        from: "Chai wle Bhaiya",
        to: "Motu",
        message: "phele pichle samose ke paise de do",
        created_at: new Date()
    },
    {
        from: "Chingham",
        to: "John",
        message: "chingham ke changul se bachna yum possible bole toh yum possible",
        created_at: new Date()
    },
    {
        from: "Dr. Jatka",
        to: "Motu",
        message: "Oye Motu mere yarr mere bhai mere bare parhh",
        created_at: new Date()
    },
    {
        from: "Ghasita Ram",
        to: "Patlu",
        message: "Urri baba mere 20 saal ke carrier mein aaisa ajuba pheli bari dekh rha hu",
        created_at: new Date()
    },
    {
        from: "John",
        to: "Chingham",
        message: "John ko pakarna mushkil hi nhi namumkin hai",
        created_at: new Date()
    },
    {
        from: "Boxer",
        to: "Motu",
        message: "Oye yeh kya kiya tmlogo ne meri sari sbji gira di",
        created_at: new Date()
    }
];


Chat.insertMany(allChats);