import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING!).then(() => console.log("Connected to database"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
