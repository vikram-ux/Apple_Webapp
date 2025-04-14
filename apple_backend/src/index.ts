import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
//   res.json({ message: 'Welcome to Apple Backend API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 