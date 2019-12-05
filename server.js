import express from 'express';
import path from 'path';

// Boilerplate for express and CommonJS module workaround for dirname
const app = express();
const PORT = process.env.PORT || 3030;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Allows the static assets of build folder to be viewed, this is the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Wildcard redirect to the react application index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Starts the application and listens for connections
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
