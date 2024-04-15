import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://umesh:umesh8907@e-com-cluster.aebwiuq.mongodb.net/'; // Update with your MongoDB URI
    await mongoose.connect(mongoURI);
    console.log('Database Connected Successfully');
  } catch (error) {
    console.error('Database Connection Failed:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB
