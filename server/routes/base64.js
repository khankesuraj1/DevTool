const express = require('express');
const router = express.Router();

router.post('/encode', (req, res) => {
  const { text } = req.body;
  const encoded = Buffer.from(text).toString('base64');
  res.json({ success: true, result: encoded });
});

router.post('/decode', (req, res) => {
  const { text } = req.body;
  try {
    const decoded = Buffer.from(text, 'base64').toString('utf-8');
    res.json({ success: true, result: decoded });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Invalid Base64' });
  }
});

module.exports = router;
