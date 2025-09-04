const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để parse JSON
app.use(express.json());

// Route cơ bản
app.get('/', (req, res) => {
  res.json({
    message: 'Chào mừng đến với Express server!',
    status: 'Server đang hoạt động'
  });
});

// Route health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Middleware xử lý 404
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route không tìm thấy',
    path: req.originalUrl
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
