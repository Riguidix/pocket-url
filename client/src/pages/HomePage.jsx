import { useCallback, useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import Table from "../components/layouts/Table";

export default function HomePage() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    fetch(`${import.meta.env.VITE_API_URL}links`)
    .then((response) => response.json())
    .then((data) => setData(data.data))
    .catch((error) => console.error(error));
  });

  useEffect(() => {
    fetchData();
  }, [setData]);

  return (
    <div className="flex flex-col h-screen items-center w-screen">
      <div className="w-full">
        <Header />
      </div>

      <div className="h-2/3 w-3/4 md:w-2/3 lg:w-full">
        <Main fetchData={fetchData} />
      </div>

      <div className="w-full md:w-3/4 lg:w-2/3">
        <Table data={data} />
      </div>
    </div>
  );
}
