import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import Table from "../components/layouts/Table";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen items-center w-screen">
      {/* <div className="row-span-1 w-full"></div> */}
      <div className="w-full">
        <Header />
      </div>

      {/* <div className="row-span-6 w-full"> */}
      <div className="h-2/3 w-3/4 md:w-2/3 lg:w-full">
        <Main />
      </div>

      {/* <div className="row-span-5 flex items-center justify-center w-full"> */}
      <div className="w-full md:w-1/2 lg:w-2/3">
        <Table />
      </div>
    </div>
  );
}
