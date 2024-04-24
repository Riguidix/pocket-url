import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Toggle from "../common/Toggle";

export default function Header() {
  return (
    <div className="flex h-full items-center justify-around md:justify-between mx-auto mt-2 w-full">
      <div className="flex h-2/3 items-center justify-center w-1/3">
        <div className="text-5xl">
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>

      <div className="flex h-2/3 items-center justify-center w-1/3">
        <Toggle />
      </div>
    </div>
  );
}
