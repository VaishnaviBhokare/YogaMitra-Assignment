const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const isValidCredentials = username === 'abc' && password === 'Pass@000';
  if (isValidCredentials) {
    res.status(200).json({ message: 'Valid credentials' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
app.listen(3000, () => console.log('Server is running on port 3000'));