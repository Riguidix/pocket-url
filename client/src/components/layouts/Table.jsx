import toast, { Toaster } from "react-hot-toast";

export default function Table({ data }) {

  const notify = (url) => toast(`The clicked URL ${url} has been copied! 🎉.`);

  return (
    <div className="h-full flex items-start justify-center overflow-auto px-5 w-full">
      <Toaster />
      {data.length !== 0 ? (
        <table className="table-auto h-auto text-sm w-full">
          <thead className="bg-green-900 dark:bg-gray-700 text-white">
            <tr>
              <th>Short Link</th>
              <th>Original Link</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(0)
              .reverse()
              .map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:bg-lime-500 even:bg-green-500 odd:bg-white dark:odd:bg-green-700 dark:even:bg-green-500"
                  >
                    <th
                      className="hover:cursor-pointer"
                      title={`Copy url with ${item.hash} hash`}
                      onClick={() => {
                        let url = `${window.location.href}${item.hash}`;
                        navigator.clipboard.writeText(url);
                        notify(url);
                      }}
                    >
                      {`${window.location.href}${item.hash}`}
                    </th>
                    <th>{item.originalURL}</th>
                    <th>{item.createdAt.slice(0, 10)}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div className="dark:bg-green-700 flex flex-col h-56 items-center justify-center text-center rounded-xl w-full md:w-2/3">
          <h2 className="my-2 text-2xl">There&apos;s no Links to List</h2>
          <h3 className="my-2 text-xl">Create a new one ✌</h3>
        </div>
      )}
    </div>
  );
}
