import React from "react";
import man from "./letter-a.png";
import star from "./star.png";
import search from "./search.png";
import settings from "./settings.png";
import notification from "./notification.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mx-9 ml-20 py-3">
      <div className="flex items-center w-1/2">
        <div className="flex items-center">
          <img src={star} />
          <p className="font-semibold">Untitled UI</p>
        </div>
        <div className="flex justify-between w-80 text-gray-600 font-semibold text-xs ml-9">
          <a href="" className="font-bold">Home</a>
          <a href="#about_me" className="font-bold">About me</a>
          <a href="#education" className="font-bold">Education</a>
          <a href="#skills" className="text-purple-400 font-bold">
            Skills
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between w-24">
        <img src={search} className="h-3 w-3" />
        <img src={settings} className="h-3 w-3" />
        <img src={notification} className="h-3 w-3" />
        <img src={man} className="h-6 w-6" />
      </div>
    </div>
  );
};

export default NavBar;
