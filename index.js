const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Fake database
let users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Vali' },
];

// Home routes
app.get('/', (req, res) => {
  res.send('Salom, Express! Server ishlamoqda 🚀');
});

app.get('/hello', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/about', (req, res) => {
  res.send('Bu haqida sahifa. Backend o‘rganayapmiz!');
});

// 🔥 GET all users (Postman uchun)
app.get('/users', (req, res) => {
  res.json(users);
});

// 🔥 GET single user
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).json({ message: 'User topilmadi' });
  }

  res.json(user);
});

// POST
app.post('/users', (req, res) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  res.status(201).json({
    message: "Yangi user qo'shildi",
    user: newUser,
  });
});

// PUT
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).json({ message: 'User topilmadi' });
  }

  user.name = name;

  res.json({
    message: 'User yangilandi',
    user,
  });
});

// DELETE
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((u) => u.id != id);

  res.json({
    message: `User ${id} o‘chirildi`,
  });
});

app.listen(3000, () => {
  console.log('Express server 3000-portda ishlamoqda → http://localhost:3000');
});
