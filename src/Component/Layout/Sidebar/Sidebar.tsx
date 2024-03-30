import { NavLink } from "react-router-dom";
import { SIDEBAR_TABS } from "../../../Layout/DefaultLayoutContext";

interface Props {
  nav?: boolean;
}

const Sidebar = ({ nav }: Props) => {
  const classNames = [
    "fixed top-0 z-40 h-screen mt-24 transition-transform -translate-x-full  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 rounded-lg",
  ];
  if (nav) {
    classNames.push("left-0 w-64");
  } else {
    classNames.push("right-0 w-24");
  }
  return (
    <aside
      id="logo-sidebar"
      className={classNames.join(" ")}
      style={{
        backgroundImage: "url('./dots.png')",
      }}
      aria-label="Sidebar"
    >
      {nav && (
        <div className="w-full px-3 pb-4 py-4 rounded-tr-xl rounded-br-xl overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {SIDEBAR_TABS?.map((tab) => (
              <NavLink
                to={tab.path}
                className={({ isActive }) => {
                  const classNames = [
                    "flex items-center p-2 rounded-lg dark:text-white dark:hover:bg-gray-700 transition-all duration-300",
                  ];
                  if (isActive) {
                    classNames.push("text-white");
                    classNames.push(tab.color.bg);
                  } else {
                    classNames.push("hover:bg-gray-100 text-black/60");
                  }
                  return classNames.join(" ");
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">{tab.name}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
