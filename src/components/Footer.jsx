import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiSolidPhone } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer_container" id="contact">
        <footer className="text-center text-lg-start  text-muted">
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-5 col-lg-5 col-xl-3 mx-auto mb-4">
                  <h6 className="footer-text fw-bold mb-4">
                    Vipusti Solutions
                  </h6>
                  <p className="footer_container_p">
                    We bring customized software programs modeled to answer your
                    needs or to improve your existing system. We help evaluate
                    your process and present the best possible solution to bring
                    excellent results and upgrade your operations in any area or
                    process.
                  </p>
                  <div className="social_icons">
                    <span>
                      {" "}
                      <FaFacebookF />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedinIn />
                    </span>
                    <span>
                      <BsInstagram />
                    </span>
                  </div>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-2 quick_links mx-auto ">
                  <h6 className="footer-text  fw-bold mb-4">Quick Links</h6>
                  <p className="footer_container_p">
                    <a href="#!" className="text-reset">
                      Terms & Conditions
                    </a>
                  </p>
                  <p className="footer_container_p">
                    <a href="#!" className="text-reset">
                      About Company
                    </a>
                  </p>
                  <p className="footer_container_p">
                    <a href="#!" className="text-reset">
                      Payment Gatway
                    </a>
                  </p>
                  <p className="footer_container_p">
                    <a href="#!" className="text-reset">
                      Business Support
                    </a>
                  </p>
                  <p className="footer_container_p">
                    <a href="#!" className="text-reset">
                      Apps Development
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-4 col-xl-3 contactus mx-auto mb-md-0 mb-4">
                  <h6 className="footer-text contact_icons fw-bold mb-4">
                    Contact Us
                  </h6>
                  <p className="footer_container_p">
                    <HiLocationMarker
                      style={{ fontSize: "20px", color: "#007CFB" }}
                    />{" "}
                    GALAXY BUSINESS PARK, Block A, Industrial Area, Sector 62,
                    Noida, Uttar Pradesh 201309{" "}
                  </p>
                  <p className="footer_container_p">
                    <span>
                      <HiOutlineMail
                        style={{ fontSize: "20px", color: "#007CFB" }}
                      />
                    </span>{" "}
                    info.global@vipusti.com
                  </p>
                  <p className="footer_container_p">
                    <span>
                      <BiSolidPhone
                        style={{ fontSize: "20px", color: "#007CFB" }}
                      />
                    </span>{" "}
                    +91 76939 60096{" "}
                  </p>
                  <p className="footer_container_p">
                    <span>
                      <BiSolidPhone
                        style={{ fontSize: "20px", color: "#007CFB" }}
                      />
                    </span>{" "}
                    + 01 234 567 89{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr></hr>

          <div className="sticy_footer ">
            <a>
              {" "}
              2023 © All rights reserved by :
              <span className="" href="">
                {" "}
                Vipusti Solutions
              </span>
            </a>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
