const express = require('express');

const app = express();

// JSON body qabul qilish uchun
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Salom, Express! Server ishlamoqda 🚀');
});

app.get('/hello', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/about', (req, res) => {
  res.send('Bu haqida sahifa. Backend o‘rganayapmiz!');
});

// POST route
app.post('/users', (req, res) => {
  const { name } = req.body;

  res.status(201).json({
    message: `Yangi user qo'shildi: ${name}`,
  });
});

// PUT route
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  res.json({
    message: `User ${id} yangilandi: ${name}`,
  });
});

// DELETE route
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `User ${id} o‘chirildi`,
  });
});

app.listen(3000, () => {
  console.log('Express server 3000-portda ishlamoqda → http://localhost:3000');
});
