import { NavLink} from "react-router-dom";
import { FaHome, FaRegHeart } from "react-icons/fa";
import useIsRTL from "../hook/useIsRTL";
import { MdExplore } from "react-icons/md";
import { handleScrollTop } from "../utils/handleScroll";


function SideBar() {
  const isRTL = useIsRTL()

  const containerClasses = `
    h-[3.75rem] md:w-[3.75rem] md:h-full z-20 fixed bottom-[-1px] left-0 right-0
    ${isRTL ? "md:right-0 md:left-auto" : ""} md:bottom-auto
    flex md:flex-col items-center gap-7 bg-slate-800 text-slate-300
  `;
  const navLink = "flex itemCenter justify-center color-[#a0aec0]  p-2 rounded-[10px] transition-all duration-300 hover:bg-[#ffffff1a]";
  const active = " bg-[#4a5568] text-white transform scale-110  shadow-[0_4px_10px_rgba(255,255,255,0.25)]"


  return (
    <div className={containerClasses}>
      <div className="relative w-full md:w-auto">

        <div className="w-full text-center hidden md:block">
          <span className="justify-self-start text-[2rem] font-bold">Pv</span>
          <div className="w-full h-[1px] bg-slate-900"></div>
        </div>


        <ul className="flex md:flex-col gap-6 justify-around md:justify-center items-center md:mt-6 w-full h-full">
          <li>
            <NavLink 
              to="/" 
              onClick={handleScrollTop}
              className={({ isActive }) => isActive ? navLink + active : navLink}
            >
              <FaHome size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/explore" 
              onClick={handleScrollTop}
              className={({ isActive }) => isActive ? navLink + active : navLink}
            >
              <MdExplore size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/favorite" 
              onClick={handleScrollTop}
              className={({ isActive }) => isActive ? navLink + active : navLink}
            >
              <FaRegHeart size={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
