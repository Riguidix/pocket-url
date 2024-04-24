import Form from "../Form";

export default function Main({ fetchData }) {
  return (
    <div className="grid grid-rows-5 gap-1 h-full items-center justify-center w-full">
      <div className="row-span-3 flex flex-col items-center justify-center text-center w-full">
        <h1 className="mb-10 text-5xl md:text-6xl lg:text-6xl w-full">
          Short your links so can fit in your Pocket 😊
        </h1>

        <h2 className="text-xl w-full">
          Pocket is an efficient and easy-to-use URL shortening service that
          makes your online experience better.
        </h2>
      </div>

      <div className="h-full p-2 row-span-2 w-full">
        <Form fetchData={fetchData} />
      </div>
    </div>
  );
}
