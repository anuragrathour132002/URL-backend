// const mongoose = require('mongoose');


// const connectDB = async () => {
//     mongoose.connect('mongodb+srv://anuragrathour47:gNxFsSFHTePbQRqr@cluster0.jxuwxmb.mongodb.net/', {
//         useNewUrlParser: true, useUnifiedTopology: true
//     }).then(() => {
//         console.log('MongoDB Connected...');
//     })
//         .catch(err => {
//             console.log(err);
//         })
// }

// module.exports = connectDB;


const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;
