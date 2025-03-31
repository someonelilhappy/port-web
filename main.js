const express = require("express");
const app = express();

app.use(express.static("public/"));
app.use(express.json());

app.post("/test", (req, rep) => {
    const b = req.body;

    process.stdout.write(`${JSON.stringify(b)}\n`);

    rep.send({sim: "sim"});
});

app.get("/", (req, rep) => {
    rep.sendFile("public/index.html");
});

app.get("/projects", (req, rep) => {
    rep.send(__dirname);
    //rep.sendFile(`public/projects/projects.html`);
});

app.listen(3000, () => {
    process.stdout.write(__dirname + "\n");
    process.stdout.write("ready\n");
})