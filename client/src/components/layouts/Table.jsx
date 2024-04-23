import toast, { Toaster } from 'react-hot-toast';
import { useCallback, useEffect, useState } from "react";

export default function Table() {
    const [data, setData] = useState([]);

    const notify = (url) => toast(`The clicked URL has been copied! 🎉.`);

    const getLinks = useCallback(async () => {
      fetch("http://localhost:3000/api/links")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data.data);
        });
    }, []);

    useEffect(() => {
      getLinks();
    }, [getLinks]);

  return (
    <div className="h-full flex items-start justify-center overflow-auto w-2/3">
      <Toaster />
      <table className="table-auto h-auto w-2/3">
        <thead className="bg-green-900 dark:bg-gray-700 text-white">
          <tr>
            <th>Short Link</th>
            <th>Original Link</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            {
                data.slice(0).reverse().map((item, index) => {
                    return (
                    <tr
                      key={ index }
                      className="hover:bg-lime-500 even:bg-green-500 odd:bg-white dark:odd:bg-green-700 dark:even:bg-green-500"
                    >
                        <th
                          className="hover:cursor-pointer"
                          title={ `Copy url with ${item.hash} hash`}
                          onClick={ () => {
                            let url = `${window.location.href}${item.hash}`;
                            navigator.clipboard.writeText(url);
                            notify(url);
                          }}
                        >
                          { `${window.location.href}${item.hash}` }
                          </th>
                        <th>{ item.originalURL }</th>
                        <th>{ item.createdAt.slice(0, 10) }</th>
                      </tr>
                    );
                })
            }
        </tbody>
      </table>
    </div>
  );
}
