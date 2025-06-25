const express = require('express');
const router = express.Router();

router.post('/format-json', (req, res) => {
  const { text } = req.body;
  try {
    const parsed = JSON.parse(text);
    const formatted = JSON.stringify(parsed, null, 2);
    res.json({ success: true, formatted });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Invalid JSON' });
  }
});

module.exports = router;
