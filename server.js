import express from "express";
import cors from "cors";
import db from "./db.js";
import authRoutes from './routes/auth.js';
import subjectRoutes from './routes/subjects.js';
import topicsRoutes from './routes/topics.js';
import quizRoutes from './routes/quiz.js';
import dashboardRoutes from './routes/dashboard.js';
const app=express();
app.use(cors());
app.use(express.json());
import questionsRoutes from "./questions.js";

app.use("/api/questions", questionsRoutes);
app.use('/api',authRoutes);
app.use("/api",subjectRoutes);
app.use("/api",topicsRoutes);
app.use('/api/quiz',quizRoutes);
app.use("/api",dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(5000,()=>{
  console.log("server running on on http://localhost:5000");
});
