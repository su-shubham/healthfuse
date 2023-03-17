import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { navlinks } from "../constants";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#ffc69b]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  useEffect(() => {
    const sidebar = document.querySelector(".sticky-sidebar");
    const handleScroll = (event) => {
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        // Scrolled down - navigate to next page
        const currentIndex = navlinks.findIndex(
          (link) => link.link === location.pathname
        );
        if (currentIndex !== navlinks.length - 1) {
          const nextLink = navlinks[currentIndex + 1];
          setIsActive(nextLink.name);
          navigate(nextLink.link);
        }
      } else if (deltaY < 0) {
        // Scrolled up - navigate to previous page
        const currentIndex = navlinks.findIndex(
          (link) => link.link === location.pathname
        );
        if (currentIndex !== 0) {
          const prevLink = navlinks[currentIndex - 1];
          setIsActive(prevLink.name);
          navigate(prevLink.link);
        }
      }
    };
    sidebar.addEventListener("wheel", handleScroll);
    return () => {
      sidebar.removeEventListener("wheel", handleScroll);
    };
  }, [navigate, navlinks, location]);
  useEffect(() => {
    const currentLink = navlinks.find(
      (link) => link.link === location.pathname
    );
    if (currentLink) {
      setIsActive(currentLink.name);
    }
  }, [location, navlinks]);
  return (
    <div className="flex flex-col left-0 border-2 border-orange-500 sticky top-5 h-[93vh] bg-[#ffdfc4] rounded-[20px] w-[6%] p-3 hover:shadow-lg transition-all  duration-500 ease-in-out sticky-sidebar">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] mt-10" imgUrl={logo} />
      </Link>
      <div className="flex flex-col gap-3 mt-auto">
        {navlinks.map((link) => (
          <Icon
            key={link.name}
            {...link}
            isActive={link.name === isActive}
            handleClick={() => {
              if (!link.disabled) {
                setIsActive(link.name);
                navigate(link.link);
              }
            }}
            className="hover:text-black"
          />
        ))}
      </div>
      <div className="flex justify-items-center items-center mt-auto mb-5">
        {navlinks.map((link) => (
          <div
            key={link.name}
            className={`h-2 w-2 rounded-full mr-2 ${
              link.name === isActive ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
