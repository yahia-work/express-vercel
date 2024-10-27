const express = require('express');
const app = express();
const port = 5000;

// Route de base
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
