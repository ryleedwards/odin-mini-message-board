const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new message page */
router.get('/new', (req, res, next) => {
  res.render('form');
});

/* POST new message submission */
router.post('/new', (req, res, next) => {
  const name = req.body.name;
  const messageText = req.body.messageText;
  messages.push({ text: messageText, user: name, added: new Date() });
  res.redirect('/');
});

module.exports = router;
