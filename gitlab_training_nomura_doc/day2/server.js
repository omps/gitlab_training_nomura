const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js running with Docker, GitHub & GitLab CI/CD!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

