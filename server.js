import config from "./config/config.js";
import app from "./server/express.js";

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

//----app listening------
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});


