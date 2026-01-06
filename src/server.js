import express from "express";
import { config } from "dotenv";

import{connectDB,disconnectDB} from "./config/db.js"
//import routes
import movieRoutes from "./routes/movieRoutes.js"
import authRoutes from "./routes/authRoutes.js"

console.log("✅ RUNNING src/server.js");

config()
connectDB()
const app=express()

//Body Parsing middlewares

//used for json and being able to request things
app.use(express.json())
app.use(express.urlencoded({extend:true}))




app.use("/movies",movieRoutes)
app.use("/auth",authRoutes)
 


//req and res
//req is request
//res is response

const PORT = 5001;
//8080 use a free port

const server = app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});


//HTTP, Get,post,put,delete
// to reach server run localhost:5001
//  http://localhost:5001

//AUTH
//GET
//USERS
//WATCHLIST


// ===============================
// Handle unhandled promise rejections
// ===============================
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);

  server.close(async () => {
    try {
      await disconnectDB();
    } finally {
      process.exit(1);
    }
  });
});


// ===============================
// Handle uncaught exceptions
// ===============================
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);

  try {
    await disconnectDB();
  } finally {
    process.exit(1);
  }
});


// ===============================
// Graceful shutdown (SIGTERM)
// ===============================
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");

  server.close(async () => {
    try {
      await disconnectDB();
    } finally {
      process.exit(0);
    }
  });
});