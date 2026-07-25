const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: true,
    author: "TARIF",
    message: "Facebook API Running"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "API Running"
  });
});

app.get("/uid", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      status: false,
      message: "Missing url parameter"
    });
  }

  // নিজের বৈধ UID lookup logic এখানে যোগ করবে

  return res.json({
    status: true,
    input: url,
    message: "Endpoint is working"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
