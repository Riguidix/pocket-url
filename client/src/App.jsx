import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

export default function App() {
  return (
    <div className="bg-zinc-200 dark:bg-green-900 h-screen text-green-900 dark:text-white w-screen">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
