import { app } from "./app";
import { participationRouter } from "./routes/ParticipationRouter";

app.use("/", participationRouter);