const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
app.use(express.json());
const objData = require("./data/datas");

app.get("/todo", (req, res) => {
  const { status } = req.query;
  if (status) {
    const filtering = status.filter((data) => data.status === status);

    console.log(filtering);

    return res.status(200).json({ message: " data retrived well", filtering });
  }
  res.status(200).json({ message: "data retrived well", objData });
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const data = objData.find((data) => data.id === Number(id));
  if (!data) res.status(404).json({ message: "user Not found" });
  else {
    return res.status(200).json({ message: "data by id retrived well", data });
  }
});

app.post("/todo", (req, res) => {
  const { id, name, status } = req.body;
  objData.push({ id, name, status });
  return res.status(201).json({ message: "data posted well", objData });
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const dataId = objData.find((data) => data.id === Number(id));
  if (!dataId) res.status(404).json({ message: "user Not found" });
  else {
    const deleteUser = objData.findIndex((data) => data.id === Number(id));
    objData.splice(deleteUser, 1);
    return res.status(200).json({ message: "user deleted well" });
  }
});

app.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  const dataId = objData.find((data) => data.id === Number(id));
  if (!dataId) res.status(200).json({ message: "User is Not found" });
  else {
    const updatIndex = objData.findIndex((data) => data.id === Number(id));

    const data2 = req.body;
    delete data2.id;
    Object.assign(objData[updatIndex], data2);

    return res
      .status(200)
      .json({ message: "data updated", data: objData[updatIndex] });
  }
});

app.listen(process.env.PORT2, () => {
  console.log(process.env.Message, process.env.PORT2);
});
