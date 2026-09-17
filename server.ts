import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 3000;

app.use(express.json());

// Database connection pool
let pool: mysql.Pool | null = null;

function getDbPool() {
  if (!pool) {
    if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) {
      console.warn("Database credentials missing. API will return 500 until configured.");
      return null;
    }
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
}

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { goal, budget, details, name, email, company, phone } = req.body;
    
    const db = getDbPool();
    if (!db) {
      // In the preview environment without DB set up, return an error gracefully
      return res.status(500).json({ error: "Database not configured yet." });
    }

    // Insert into contacts table
    const query = `
      INSERT INTO contacts (goal, budget, details, name, email, company, phone, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
    `;
    
    await db.execute(query, [goal, budget, details, name, email, company, phone]);
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// Vite middleware & Static Serve
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
