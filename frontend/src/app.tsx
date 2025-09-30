import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./app.css";

export default function App() {

  return (
    <Router
      root={props => (
        <MetaProvider>
          <script src="https://cdn.jsdelivr.net/npm/theme-change@2.5.0/index.js"></script>

          <Title>SolidStart - Basic</Title>
          <div class="navbar bg-base-100">
            <div class="navbar-start">
              <a href="/" class="btn btn-ghost normal-case text-xl">SolidStart</a>
            </div>
            <div class="navbar-center">
              <a href="/" class="btn btn-ghost">Index</a>
              <a href="/about" class="btn btn-ghost">About</a>
            </div>
            <div class="navbar-end">
              <ThemeSwitcher />
            </div>
          </div>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
