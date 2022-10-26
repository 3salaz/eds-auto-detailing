import React from "react";
import { Header, Navbar } from "../layout";
import { FaYelp, FaFacebookF, FaInstagram } from "react-icons/fa";

function MyLinks() {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh] flex flex-col justify-between items-center bg-white pb-6">

        <Header />

        <ul className="w-full rounded-t-lg flex gap-2 items-center justify-center p-4">
          <li className="border-2 rounded-full w-24 bg-white h-24">
            <a
              className="flex items-center justify-center h-full"
              target="blank"
              href="https://www.yelp.com/biz/eds-auto-detailing-san-francisco?hrid=ZMWew4GnYslK3juuciNS-w&rh_type=phrase&rh_ident=police"
            >
              <FaYelp className="text-4xl"/>
            </a>
          </li>
          <li className="border-2 rounded-full w-24 bg-white h-24">
            <a
              className="flex items-center justify-center h-full"
              target="blank"
              href="https://www.facebook.com/profile.php?id=100087261338904"
            >
              <FaFacebookF className="text-4xl"/>
            </a>
          </li>
          <li className="border-2 rounded-full w-24 bg-white h-24">
            <a
              className="flex items-center justify-center h-full"
              target="blank"
              href="https://www.instagram.com/edsautodetailingsf/?r=nametag"
            >
              <FaInstagram className="text-4xl"/>
            </a>
          </li>

        </ul>

        <div className="bg-red-500 rounded-lg w-32 p-2 text-center">
          <a className="text-2xl text-white" href="tel:415-702-8089">Call Now</a>
        </div>

      </div>
    </div>
  );
}

export default MyLinks;
