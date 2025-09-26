import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .get("/api/hello", () => ({ message: "Hello from API!" }))
  .get("/api/todos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    return todos;
  })
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
