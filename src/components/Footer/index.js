import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="link-cluster">
        <a
          href="https://www.linkedin.com/in/tanya-poovaiah-53087266"
          target="_blank"
        >
          <img
            src="https://www.clipartmax.com/png/middle/304-3041379_linkedin-with-circle-comments-transparent-background-website-icon.png"
            className="smlink"
            alt="LinkedIn"
          />
        </a>

        <a href="https://github.com/tpoovaiah" target="_blank">
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            className="smlink"
            alt="GitHub"
          />
        </a>

        <a href="https://tanyapoovaiah.wordpress.com/" target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmH77HyERSQQ9ozwzxPvJQvpY_Atdu4IitTw&usqp=CAU"
            className="smlink"
            alt="ArtSite"
          />
        </a>
      </div>
      <span>Copyright © Tanya Poovaiah</span>
    </footer>
  );
}

export default Footer;
