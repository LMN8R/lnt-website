/* eslint-disable */
import { useState } from "react";
import "./Footer.css";
export default function Footer() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div class="line">
        <div class="know">
          <hr />
          <h2>Want to know about us?</h2>
          <hr />
        </div>

        <div className="button4">
          <a
            href="contact"
            className="read relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-blue border-solid border-2 border-sky-700  rounded-lg  group hover:bg-lntblue"
          >
            <span className="absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400  ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative ">Get in touch with us</span>
          </a>
        </div>
      </div>
      <footer class="footer">
        <div class="fcontainer">
          <hr></hr>
          <div class="frow">
            <div class="footer-col">
              <h4>About Us</h4>
              <ul class="hello hide-on-mobile">
                <li>
                  <a href="overview">Overview</a>
                </li>
                <li>
                  <a href="jv-partners">JV partners</a>
                </li>
                <li>
                  <a href="#">Policies & Frameworks</a>
                </li>
                <li>
                  <a href="#">Technologies</a>
                </li>
                <li>
                  <a href="management">Management</a>
                </li>
                {/* <li>
                  <a href="#">Our Team</a>
                </li> */}
              </ul>
            </div>

            <div class="footer-col">
              <h4>Sectors</h4>
              <ul class="hello hide-on-mobile">
                <li>
                  <a href="#">Thermal</a>
                </li>
                <li>
                  <a href="#">Renewable Projects</a>
                </li>
                <li>
                  <a href="#">Transmission & Distribution</a>
                </li>
                <li>
                  <a href="#">Air Quality Control System</a>
                </li>
                <li>
                  <a href="#">Water Treatment</a>
                </li>
                <li>
                  <a href="#">Plant Engineering for utillities</a>
                </li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Services</h4>
              <ul class="hello hide-on-mobile">
                <li>
                  <a href="#">Basic/Detail Engineering</a>
                </li>
                <li>
                  <a href="#">Owner's Engineering</a>
                </li>
                <li>
                  <a href="#">Lender's Engineering</a>
                </li>
                <li>
                  <a href="#">PMC</a>
                </li>
                <li>
                  <a href="#">R&M Services</a>
                </li>
                <li>
                  <a href="#">Special Engineering</a>
                </li>
              </ul>
            </div>

            {/* <div class="footer-col">
              <h4>Investors</h4>
            </div> */}

            <div class="footer-col">
              <h4>Media</h4>
              <ul class="hello hide-on-mobile">
                <li>
                  <a href="#">News & Updates</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Technical papers</a>
                </li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Careers</h4>
              <ul class="hello hide-on-mobile">
                <li>
                  <a href="#">Life@L&T-S&L</a>
                </li>
                <li>
                  <a href="#">Open position</a>
                </li>
                <li>
                  <a href="#">Testimonals</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div class="copy">
        <div class="copyright">
          <p>&#169; 2023 L&T-sargent & Lundy Limited.All rights reserved</p>
        </div>
        <div class="terms">
          <li>
            <a href="/copyright-terms">Copyright & Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>|</li>
          <li>
            <a href="">Sitemap</a>
          </li>
          <li>|</li>
          <li>
            <a href="/disclaimer">Disclaimer</a>
          </li>
          <li>|</li>
          <li>
            <a href="">ltsl@lntsnl.com</a>
          </li>
        </div>
      </div>
    </>
  );
}
