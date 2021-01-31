import React from "react";
import "../components/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact">
        <label>Sign up to our newsletter &nbsp;&nbsp;</label>
        <input
          type="text"
          placeholder="email address"
          className="footer-input"
        ></input>
        <button className="footer-submit">Subscribe</button>&nbsp;&nbsp;
        <a href="https://www.facebook.com/codeyourfuture.io">
          <img
            src="https://i.ibb.co/zHTwjvB/facebook-circular-logo-3.png"
            alt="facebook"
            border="0"
            target="_blank"
          ></img>
        </a>
        <a href="https://twitter.com/CodeYourFuture">
          <img
            src="https://i.ibb.co/4FQHjbg/twitter-1.png"
            alt="twitter"
            border="0"
            target="_blank"
          ></img>
        </a>
        <a href="https://www.linkedin.com/company/codeyourfuture/">
          <img
            src="https://i.ibb.co/Pjb99n0/linkedin-logo-1.png"
            alt="linkedin"
            border="0"
            target="_blank"
          ></img>
        </a>
        <a href="https://www.instagram.com/codeyourfuture_/">
          <img
            src="https://i.ibb.co/NWpLts7/instagram-5.png"
            alt="instagram"
            border="0"
            target="_blank"
            className="instagram"
          ></img>
        </a>
        <a href="https://github.com/CodeYourFuture">
          <img
            src="https://i.ibb.co/7S320xp/github-2.png"
            alt="github"
            border="0"
            target="_blank"
          ></img>
        </a>
        <a href="mailto:contact@codeyourfuture.io">
          <img
            src="https://i.ibb.co/hMX0mpb/email.png"
            alt="email"
            border="0"
            target="_blank"
          ></img>
        </a>
      </div>
    </div>
  );
}
