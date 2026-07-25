const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: true,
    author: "TARIF",
    message: "API Running"
  });
});

app.get("/ping", (req, res) => {
  res.json({
    status: true,
    message: "Pong!"
  });
});

app.get("/info", (req, res) => {
  res.json({
    name: "Simple API",
    version: "1.0.0",
    author: "TARIF"
  });
});

app.get("/status", (req, res) => {
  res.json({
    status: "online",
    uptime: process.uptime(),
    time: new Date()
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: "Endpoint not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
