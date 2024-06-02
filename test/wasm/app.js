const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


let buildDir = path.join(__dirname, '..', '..', 'build', 'wasm_mvp');
app.use('/build', express.static(buildDir));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});