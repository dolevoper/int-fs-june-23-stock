import "dotenv/config";

import express from "express";
import cors from "cors";
import { json } from "body-parser";
import mongoose from "mongoose";
import { createServer } from "http";

const app = express();

app.use(cors());
app.use(json());

app.get("/check", (req, res) => {
    res.status(200);
    res.send("Hello");
});

const server = createServer(app);
const PORT = process.env.PORT ?? 3000;

async function startServer() {
    if (!process.env.CONN_STRING) {
        throw Error("connection string is missing")
    }

    await mongoose.connect(process.env.CONN_STRING, {
        dbName: "stock-project"
    });

    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

startServer();