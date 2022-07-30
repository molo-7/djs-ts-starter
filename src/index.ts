import dotenv from "dotenv";
import Client from "./libs/client";

dotenv.config();
const client = new Client(process.env.TOKEN!);
