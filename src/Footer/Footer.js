import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer p-5">
        <div className="footer-content">
          <div className="footer-section about d-flex text-white justify-content-between">
            <h1
              className="logo-text text-white navLogo"
              style={{ fontSize: 60 }}
            >
              <span>Batik</span>Pedia
            </h1>
            <div className="footer-section links">
              <br />
              <ul>
                <a href="#">
                  <div className="dropdown-footer">
                    <li>Team</li>
                    <div className="dropdown-content-footer text-black">
                      <a href="https://dinus.ac.id/mahasiswa/A11.2020.12641">
                        Muhamad Salman Adhim Baqy
                      </a>
                      <a href="https://dinus.ac.id/mahasiswa/A11.2020.12667">
                        Ikromi Latifano
                      </a>
                    </div>
                  </div>
                </a>
                <a href="#gallery">
                  <li>Gallery</li>
                </a>
                <a href="#">
                  <li>Terms and Conditions</li>
                </a>
              </ul>
            </div>
            <div className="socials d-flex align-items-center">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-white">
          &copy; BatikPedia | Designed by BatikPedia
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
