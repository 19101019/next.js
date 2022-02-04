import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="bg-black py-10 px-6">
      <div className=" e-flex-container-footer lg:container mx-auto text-gray-100">
        <div>
          <h2>© 2021 Ebook</h2>
        </div>
        <div>
          <h2 className="pb-2">Social Handles</h2>
          <ul className="text-gray-400">
            <li className="hover:text-gray-100">
              <a href="#">Instagram</a>
            </li>
            <li className="hover:text-gray-100">
              <a href="#">GitHub</a>
            </li>
            <li className="hover:text-gray-100">
              <a href="#">Twitter</a>
            </li>
            <li className="hover:text-gray-100">
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="pb-2">Categories</h2>
          <ul className="text-gray-400">
            <li>Laptops</li>
            <li>Phones</li>
          </ul>
        </div>

        <div>
          <h2>Ebook</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
