const express = require("express");
const PORT = 4000;
//Executing express
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("This is a functioning Route");
});

//Proof of port working
/*app.listen("4000", () =>
  console.log("server successfully running on port 4000")
);*/
app.listen(PORT, () => {
  console.log(`server successfully running on port ${PORT}`);
});
