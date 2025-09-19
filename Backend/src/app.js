
import express from "express";
import userRoutes from "./routes/userRouters.js"
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);
const server = createServer(app);
const io = new Server(server);
app.get("/home", (req, res) => {
  return res.json({ "hello": "world" });
});
const start = async () => {
  const connectionDb = await mongoose.connect("mongodb+srv://akbgs0001:7294985449aA@cluster0.91qscjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log(connectionDb.connection.host);
  server.listen(app.get("port"), () => {
    console.log("listening on port 8000 server");
  })
}
start(); 
