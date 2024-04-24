import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    let result = localStorage.getItem("theme") !== "dark";

    setToggle(result);
  }, []);


  useEffect(() => {
    handleToggle();
  }, [handleToggle]);

  return (
    // <div className="flex h-full items-center justify-center w-full">
    <div className="flex items-center justify-center h-full w-full md:w-1/2">
      <label className="cursor-pointer flex h-full items-center justify-center w-full">
        <span className="font-medium mx-3 text-green-900 dark:text-white text-2xl">
          <FontAwesomeIcon icon={faMoon} />
        </span>

        <input
          type="checkbox"
          checked={toggle}
          className="sr-only peer"
          onChange={() => {
            const theme = localStorage.getItem("theme");
            if (theme === "dark") {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("theme", "light");
            } else {
              document.documentElement.classList.add("dark");
              localStorage.setItem("theme", "dark");
            }

            setToggle((toggle) => !toggle);
          }}
        />

        <div
          className="
            after:absolute
            after:bg-white
            bg-gray-200
            dark:bg-gray-500
            peer-checked:bg-green-600
            after:border
            after:border-gray-300
            dark:border-gray-600
            peer-checked:after:border-white
            after:content-['']
            after:h-5
            h-6
            peer-focus:outline-none
            peer
            relative
            peer-focus:ring-4
            dark:peer-focus:ring-transparent
            peer-focus:ring-transparent
            after:rounded-full
            rounded-full
            after:start-[2px]
            after:top-[2px]
            after:transition-all
            peer-checked:after:translate-x-full
            rtl:peer-checked:after:-translate-x-full
            after:w-5
            w-11
          "
        ></div>

        <span className="font-medium mx-3 text-green-900 dark:text-white text-2xl">
          <FontAwesomeIcon icon={faSun} />
        </span>
      </label>
    </div>
  );
}
