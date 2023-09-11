import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function TopHeader() {
  return (
    <section
      id="topbar"
      className="d-flex align-items-center"
      style={{ height: "80px", border: "1px solid #b0c8eb"}}
    >
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <AiOutlineMail style={{ color: "blue" }} />
          <a
            href="mailto:info.global@vipusti.com"
            style={{ color: "black", textDecoration: "none" }}
          >
            info.global@vipusti.com
          </a>

          <i
            className="bi bi-phone d-flex align-items-center ms-4"
            style={{ color: "blue" }}
          >
            <span>
              <a
                href="tel:+91 76939 60096"
                target="_blank"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                +91 76939 60096
              </a>
            </span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>  */}
          <a
            href="https://www.facebook.com/vipustisolutions?mibextid=ZbWKwL"
            className="facebook fs-5 me-3"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://instagram.com/vipusti_solutions24?igshid=ZDdkNTZiNTM="
            className="instagram fs-5 me-3"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/vipusti-solutions/"
            className="linkedin fs-5 me-3"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
