const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

// Colors to rotate through for different pods
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF33A8"];
const hostname = os.hostname();
const color = colors[Math.floor(Math.random() * colors.length)];

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="background-color:${color}; color:white; text-align:center; font-family:sans-serif;">
        <h1>Pod: ${hostname}</h1>
        <h2>Color: ${color}</h2>
        <p>Served via LoadBalancer for test</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port} - Hostname: ${hostname}`);
});
