import { Outlet } from "react-router";
import { TopMenu } from "./TopMenu";

export function App() {
  return (
    <main>
      <TopMenu />
      <h1>Stock</h1>
      <Outlet />
    </main>
  );
}
