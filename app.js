const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//Testing Array
const employees = [
    { id: 1, name: "stu.01" },
    { id: 2, name: "stu.02" },
    { id: 3, name: "stu.03" }
];

//READ
app.get("/", (req, res) => {
    res.send("Hello my name is Himal Samaranayake");
});
app.get("/employees", (req, res) => {
    res.json(employees);
});
//READ by specific ID
app.get("/employees/:id", (req, res) => {
    const emp = employees.find(c => c.id === parseInt(req.params.id))
    if (!emp) return res.status(404).send('Not Found');
    res.send(emp);
});

//CREATE
app.post("/create/employees", (req, res) => {
    const emp = {
        id: emp.length + 1,
        name: req.body.name
    };
    employees.push(emp);
    res.send(employees);
});

//UPDATE
app.put('/update/:id', (req, res) => {
    const emp = employees.find(c => c.id === parseInt(req.params.id))
    if (!emp) return res.status(404).send('Not Found');

    //update the student
    emp.name = req.body.name;
    res.send(employees);
});

//DELETE
app.delete('/delete/:id', (req, res) => {
    const emp = employees.find(c => c.id === parseInt(req.params.id))
    if (!emp) return res.status(404).send('Not Found');

    //delete the student
    const index = employees.indexOf(emp);
    employees.splice(index, 1);
    res.send(emp)
});


app.listen(port, () => {
    console.log(`example app listening on ${port}`);
});