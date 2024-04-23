import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex h-full items-center justify-center w-full">
      <label className="h-full inline-flex items-center mb-5 cursor-pointer">
        <span className="mx-3 text-2xl font-medium text-gray-900 dark:text-gray-300">
          <FontAwesomeIcon icon={faMoon} />
        </span>

        <input
          type="checkbox"
          value={toggle}
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

        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent dark:peer-focus:ring-transparent rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>

        <span className="mx-3 text-2xl font-medium text-gray-900 dark:text-gray-300">
          <FontAwesomeIcon icon={faSun} />
        </span>
      </label>
    </div>
  );
}
