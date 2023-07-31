const app = require("./app");

const conn = require("./database/conn");
conn();

app.listen(3000, () => console.log("listening on port 3000"));
