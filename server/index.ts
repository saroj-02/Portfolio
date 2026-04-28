import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Feedback from './models/Feedback.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI || MONGODB_URI === 'YOUR_MONGODB_ATLAS_CONNECTION_STRING') {
  console.error('CRITICAL: MONGODB_URI is not configured correctly in .env file!');
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
  });

// Serve Static Files from the frontend's dist folder
const isCompiled = __dirname.split(path.sep).pop() === 'dist';
const distPath = path.resolve(__dirname, isCompiled ? '../../dist' : '../dist');
app.use(express.static(distPath));

// Routes
app.post('/api/feedback', async (req: Request, res: Response) => {
  console.log('📩 Incoming Feedback Request:', req.body);
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newFeedback = new Feedback({ name, email, subject, message });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback stored successfully!' });
  } catch (error) {
    console.error('❌ Error storing feedback:', error);
    res.status(500).json({ error: 'Failed to store feedback' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.send('Portfolio Backend is running');
});

// Catch-all route to serve the frontend for any other request
app.use((req, res, next) => {
  if (req.method === 'GET' || req.method === 'HEAD') {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
