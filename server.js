const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// إعداد الملفات الثابتة (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint لجلب البيانات من ملف JSON
app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, 'public', 'data', 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// تشغيل الخادم
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
