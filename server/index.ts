import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Feedback from './models/Feedback';

dotenv.config();

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
    console.error('Please ensure your IP address is whitelisted in MongoDB Atlas and the connection string is correct.');
  });

// Routes
app.post('/api/feedback', async (req: Request, res: Response) => {
  console.log('📩 Incoming Feedback Request:', {
    method: req.method,
    headers: req.headers['content-type'],
    body: req.body
  });
  
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      console.warn('⚠️ Validation failed: Missing required fields');
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newFeedback = new Feedback({ name, email, subject, message });
    await newFeedback.save();
    
    console.log('✅ Feedback stored successfully for:', email);
    res.status(201).json({ message: 'Feedback stored successfully!' });
  } catch (error) {
    console.error('❌ Error storing feedback:', error);
    res.status(500).json({ error: 'Failed to store feedback' });
  }
});

// Basic route for health check
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
