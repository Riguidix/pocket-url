import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import Toggle from "../common/Toggle";

export default function Header() {
  return (
    <div className="flex h-full items-center justify-between mx-auto mt-2 w-full">
      <div className="flex h-full items-center justify-center p-2 w-1/3">
        <div className="flex h-full items-center justify-center text-green-900 dark:text-white text-5xl w-1/6">
          <FontAwesomeIcon icon={ faBagShopping } />
        </div>
      </div>

      <div className="flex h-full items-center justify-center p-5 w-1/3">
        <Toggle />
      </div>
    </div>
  );
}
