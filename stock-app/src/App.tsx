import { Outlet } from "react-router";

export function App() {
  return (
    <main>
      <h1>Stock</h1>
      <p>Hello world</p>
      <Outlet />
    </main>
  );
}
