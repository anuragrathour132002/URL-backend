const app = require('./app');
var fs = require("fs");
var https = require("https");

const connectDB = require('./config/database');
connectDB();



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
