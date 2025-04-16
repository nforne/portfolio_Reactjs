import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

import users from "./server/routes/user.routes.js";
import contacts from "./server/routes/contact.routes.js";

//mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Connection error", err));
mongoose.connection.on("error", (e) => {
  console.log(e)
  throw new Error(`unable to connect to database: ${ config.mongoUri }`);
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.use(users);
app.use(contacts);


//----app listening------
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});


