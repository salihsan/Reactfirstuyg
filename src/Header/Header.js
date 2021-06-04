import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-div">
          <h3>MENU</h3>
          <ul>
              <li>Anasayfa</li>
              <li>Urun</li>
              <li>Galeri</li>
              <li>Iletisim</li>
       </ul> 
    </div>
  );
};

export default Header;