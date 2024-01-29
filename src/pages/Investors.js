import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Investors.css";
import React, { useState } from "react";


const Investors = () => {
  return (
    <div className="investors_container">
      <Navbar />

      {/* Investors Hero */}
      <div className="overview-section1">
        {/* css in overview */}
        <div className="overview-image">
          <img style={{ filter: 'brightness(0.5)' }} src="/inv_start.png" alt="" height="auto" width="100%" />

          <div className="overview-heading">
            <h1> INVESTOR UPDATES </h1>
            {/* <h5>Delivering value, Fostering Trust</h5> */}
          </div>
        </div>
      </div>

      {/* investors pdf */}
      <div className="investors-bg">
        {/* <img className="investors_background" src="/investors-bg.png" /> */}
      </div>

      <div className="reports" style={{ marginTop: '-12rem' }}>

        <div className="annual-reports">
          <div className="reports-heading">
            <h2>Annual Report</h2>
          </div>

          <div className="report2">
            <a href="annual-report-of-fy-2023-lt-sl.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2022-23</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="annual-report-of-fy-2021-22-ltsl.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2021-22</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="annual-report_fy-20-21.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2020-21</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="/annual-report_fy-2019-20_1-1.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2019-20</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="annual-report-fy-2018-19-1-1.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2018-19</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          {/* </div> */}
        </div>

        <div className="investors-line"></div>

        <div className="agm-notice">
          <div className="reports-heading">
            <h2>AGM/EGM  Notice</h2>
          </div>

          <div className="report2">
            <a href="notice-28th-day-of-june-2023-agm-lt-sl.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">AGM- 28 June 2023</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="agm-notice-2022-23-may-2022-ltsl.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">AGM- 23 May 2022</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="draft-agm_notice-2021-1.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">AGM- 8 June 2021</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="notice_ltsl_agm_2020-1.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">AGM- 29 September 2020</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="notice_agm_2019-1.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">AGM- 16 August 2019</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
        </div>


        <div className="investors-line"></div>

        <div className="annual-return">
          <div className="reports-heading">
            <h2>Annual Return</h2>
          </div>
          <div className="report2">
            <a href="annual-return-of-fy-2023-lt-sl.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2022-23</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="mgt-7-2022-ltsl.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2021-22</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
          <div className="report2">
            <a href="form_mgt-7-2021-1.pdf" target="_blank">
              <div className="report1">
                <div className="report-year">
                  <p id="hovered-text">2020-21</p>
                </div>
                <div className="pdf">
                  <p><img src="pdf-icon.png"></img></p>
                </div>
              </div>
              <div className="report1-line" />
            </a>
          </div>
        </div>

      </div>





      <Footer />
    </div>
  );
}

export default Investors;