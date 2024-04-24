import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Button from '../components/common/Button';

export default function RedirectPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function createLink(link) {
    let element = document.createElement("a");

    if (link.startsWith("http://") || link.startsWith("https://")) {
      element.href = link;
    } else {
      element.href = "http://" + link;
    }

    element.click();
  }

  useEffect(() => {
    let url = window.location.href;
    let hash = url.slice(-5);

    // eslint-disable-next-line no-undef
    fetch(`${import.meta.env.VITE_API_URL}links/h/${hash}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data[0] !== undefined) {
          let originalURL = data.data[0].originalURL;

          createLink(originalURL);
          return;
        } else {
          setError("Uh Oh!, seems the links you're trying to reach it's expired or doesn't exist 😵🥴");
        }
      });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center w-screen">
      {
        error === ""
        ?
        <h1>Redirecting to your page</h1>
        :
        <div className="flex flex-col h-2/3 items-center justify-center w-2/3">
          <h1 className="text-2xl text-justify my-10 w-full lg:w-2/3">
            { error }
          </h1>
          <Button
            label={
              <>
                <span className="mx-10">Go Home</span>
                <FontAwesomeIcon icon={faHome} />
              </>
            }
            // style="bg-slate-200 hover:bg-slate-400 hover:cursor-pointer h-20 rounded-lg w-full"
            style="
            bg-green-900
            hover:bg-green-500
            dark:bg-white
            dark:hover:bg-slate-300
            flex
            h-16
            items-center
            justify-center
            px-4
            py-2
            rounded-xl
            text-lg
            text-white
            dark:text-green-900
            w-full
            md:w-1/2
            lg:w-1/3
            "
            action={ () => navigate("/")}
          />
        </div>
      }
    </div>
  );
}
