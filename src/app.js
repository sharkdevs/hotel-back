import express from 'express';

const app = new express();
app.listen(3000, () => {
  console.log(`Server started on http://localhost:${3000}`);
});

app.get('/', (req, res) => {
  return  res.json({value: "successful"});
});