import { useEffect } from "react";

export default function RedirectPage() {
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

    fetch(`http://localhost:3000/api/links/h/${hash}`)
      .then((response) => response.json())
      .then((data) => {
        let originalURL = data.data[0].originalURL;

        createLink(originalURL);
      });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center w-screen">
      <h1>Redirecting to your page</h1>
    </div>
  );
}
