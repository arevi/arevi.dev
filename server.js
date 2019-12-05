import express from 'express';
import path from 'path';
const app = express();

const PORT = process.env.PORT || 3030;

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
