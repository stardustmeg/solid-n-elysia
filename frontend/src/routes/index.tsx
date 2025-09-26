import { Title } from "@solidjs/meta";
import { createSignal, createResource } from "solid-js";
import Counter from "~/components/Counter";

export default function Home() {
  const [shouldFetch, setShouldFetch] = createSignal(false);

  const [todos] = createResource(shouldFetch, async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`);
    return await response.json();
  });

  const handleFetchTodos = () => {
    setShouldFetch(true);
  };

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />

      <div class="flex justify-center my-6">
        <button
          class="btn btn-primary"
          onClick={handleFetchTodos}
          disabled={todos.loading}
        >
          {todos.loading && <span class="loading loading-spinner loading-sm"></span>}
          {todos.loading ? "Loading..." : "Fetch Todos"}
        </button>
      </div>

      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Todos:</h2>

        {todos.loading && (
          <div class="alert alert-info"><span class="loading loading-spinner loading-sm"></span>Loading todos...</div>
        )}

        {todos.error && (
          <div class="alert alert-error">
            <span>Error: {todos.error.message}</span>
          </div>
        )}

        {todos() && (
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Todo List</h3>
              <div class="badge badge-primary mb-4">Total: {todos().length}</div>

              <div class="max-h-96 overflow-y-auto bg-base-200 p-4 rounded-lg">
                <pre class="text-sm leading-relaxed whitespace-pre-wrap">
                  {JSON.stringify(todos().slice(0, 10), null, 2)}
                  {todos().length > 10 && `\n... and ${todos().length - 10} more todos`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
