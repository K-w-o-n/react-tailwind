import React from "react";
import {IoMdSearch} from "react-icons/io";
  const MenuLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Shop", link: "/#shop" },

    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blogs", link: "/#blog" },
  ];

const Navbar = () => {

  return (
    <div className="bg-white dark:bg-gray-500 dark:text-white duration-200 realtive z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* logo and links section */}
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="text-primary font-semibold text-2xl uppercase sm:text-3xl"
            >
              KwonShop
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                    {
                        MenuLinks.map((data, index) => (
                            <li key={index}>
                                <a href={data.link} className="inline-block px-4 font-semiblold
                                text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                    {data.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
          </div>
          {/* navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar setting */}
            <div className="realtive group hidden sm:block">
              <input type="text" className="search-bar" placeholder="Search"
              
              />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray -400"/>
            </div>
            {/* dark Mode section */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
