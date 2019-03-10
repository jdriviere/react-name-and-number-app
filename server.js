const express = require('express');
const path = require('path');

const port = process.env.port || 8080;
const app = express();

// App build
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// App routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// App server
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

app.get('*', function(req, res){
  res.status(404).send('Error: Cannot find the route you specified.');
});