import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faScissors } from "@fortawesome/free-solid-svg-icons";

import Input from "./common/Input";
import Button from "./common/Button";

export default function Form({ fetchData }) {
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
          navigator.clipboard.writeText(url);
          notify();
        })
        .catch((err) => console.error(err));

      setValue("");
    }

    fetchData();
  };

  return (
    <form className="flex items-start justify-center h-full w-full">
      <Toaster />
      <div className="relative w-full lg:w-3/4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FontAwesomeIcon icon={faLink} />
        </div>

        <Input
          type="text"
          value={ value }
          setValue={ (event) => setValue(event.target.value) }
          style="
            block
            dark:bg-gray-700
            dark:border-gray-600
            dark:focus:border-green-500
            border-gray-300
            bg-gray-50
            flex
            items-center
            justify-center
            border
            focus:border-none
            h-16
            dark:placeholder-gray-400
            p-4
            ps-12
            focus:ring-0
            focus:outline-none
            rounded-full
            text-md
            text-green-900
            dark:text-white
            w-full
          "
          placeholder="Enter the link here:"
        />

        <Button
          label={
            <>
              <FontAwesomeIcon
                className="block mx-2 text-2xl rotate-90 md:text-md"
                icon={faScissors}
              />
              <span className="hidden sm:block">
                Shorten Now
              </span>
            </>
          }
          style="
            absolute
            bg-green-900
            hover:bg-green-500
            dark:bg-white
            dark:hover:bg-slate-300
            end-0
            flex
            font-medium
            inset-y-0
            items-center
            justify-center
            focus:outline-none
            px-4
            py-2
            focus:ring-0
            rounded-full
            text-sm
            text-white
            dark:text-green-900
            w-1/4
            sm:w-2/6
            lg:w-1/4
          "
          action={ (event) => handleSubmit(event) }
        />
      </div>
    </form>
  );
}
