import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");

  const notify = () => toast("The URL has been copied! 🎉.");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== "") {
      let datos = {
        originalURL: value,
      };
      
      // eslint-disable-next-line no-undef
      fetch(`${import.meta.env.VITE_API_URL}links`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let url = `${window.location.href}${data.data.hash}`;
          console.log(url);
          navigator.clipboard.writeText(url);
          notify();
        })
        .catch((err) => console.error(err));

      setValue("");
    }
  };

  return (
    <form className="h-full w-full">
      <Toaster />
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FontAwesomeIcon icon={faLink} />
        </div>

        <input
          type="text"
          id="url_shortener"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="
            block
            dark:bg-gray-700
            dark:border-gray-600
            dark:focus:border-green-500
            border-gray-300
            bg-gray-50
            border
            focus:border-none
            h-16
            dark:placeholder-gray-400
            p-4
            ps-10
            focus:ring-4
            rounded-full
            text-sm
            dark:text-white
            text-green-900
            w-full          
            "
          placeholder="Enter the link here"
          required
        />

        <button
          type="submit"
          onClick={(event) => handleSubmit(event)}
          className="
            absolute
            dark:bg-white
            dark:hover:bg-slate-200
            end-0
            bg-green-900
            hover:bg-green-500
            font-medium
            inset-y-0
            h-16
            focus:outline-none
            px-4
            py-2
            focus:ring-0
            rounded-full
            text-sm
            text-white
            dark:text-green-900
            w-1/6
            "
        >
          Shorten Now!
        </button>
      </div>
    </form>
  );
}
