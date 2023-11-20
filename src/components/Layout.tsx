import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import canada from "../assets/images/Canada.svg";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div
        className="border-b-[1px] border-[#000000] flex"
        style={{ height: "80px" }}
      >
        <div className="flex justify-evenly items-center py-2 w-full">
          <div>
            <FontAwesomeIcon icon={faPhone} beat style={{ color: "#0c5fed" }} />
            <span className="mx-2 font-sans text-[#00000095] text-sm">
              1-6477848960
            </span>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#dac90b" }}
            />
            <span className="italic font-sans mx-2 text-sm">North York</span>
          </div>

          <div className="flex">
            <img
              src={canada}
              alt=""
              style={{ width: "30px", height: "auto" }}
            />
            <span className="italic font-sans mx-2 text-sm">English, CAD</span>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
