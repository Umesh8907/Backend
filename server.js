import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import connectDB from "./database/config.db.js"
import dotenv from "dotenv"
import userRoute from "./routes/userRoutes.js";

//configure dotenv
dotenv.config()

const app = express();
const port = process.env.PORT || 8000;


//Database Connection
connectDB()


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all origins
app.use(helmet()); // Add security headers
app.use(compression()); // Compress all responses
app.use(morgan('combined')); // Log HTTP requests


// Routes

app.use('/api/users', userRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Not Found Middleware
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
