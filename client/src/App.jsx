import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

// import Header from "./components/layouts/Header";
// import Main from "./components/layouts/Main";
// import Table from "./components/layouts/Table";

export default function App() {
  return (
    <div className="bg-zinc-200 dark:bg-green-900 grid grid-rows-12 h-screen text-green-900 dark:text-white w-screen">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {/* <div className="row-span-1 w-full">
        <Header />
      </div>

      <div className="row-span-6 w-full">
        <Main />
      </div>

      <div className="row-span-5 flex items-center justify-center w-full">
        <Table />
      </div> */}
    </div>
  );
}
  