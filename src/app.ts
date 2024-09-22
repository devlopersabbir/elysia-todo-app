import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { routes } from "./routes/todo";

const app = new Elysia();
// middleware
app.use(
  swagger({
    autoDarkMode: true,
  })
);

// routes calling
routes(app);

// exporting app
export default app;
