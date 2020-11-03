import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        alt="cyf-logo"
        className="header-img"
      ></img>
      <a href="/">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/159/159707.svg"
          alt="logout-img"
          className="logout-img"
        ></img>
      </a>
    </div>
  );
}
