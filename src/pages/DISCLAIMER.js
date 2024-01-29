import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./copyright-terms.css";

function Disclaimer() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="main">
        <div className="pagetitle">
          <h1 className="heading">Disclaimer</h1>
        </div>
        <h3 className="heading3">LEGAL NOTICE</h3>
        <p className="textcontent">
          Except as otherwise noted, all text, images, graphics, photographs,
          information, data and other materials on the L&T-SARGENT & LUNDY
          website are the intellectual property owned or licensed by L&T-SARGENT
          & LUNDY or its parent companies (Larsen & Toubro Ltd and Sargent &
          Lundy LLC) and are protected by copyrights, trademarks, or service
          marks of the company. The information may not, except under written
          license, be copied, reproduced, transmitted, displayed, performed,
          distributed, rented, sub-licensed, altered, stored for subsequent use
          or otherwise used in whole or in part in any manner without
          L&T-SARGENT & LUNDY 's prior written consent.
        </p>
        <h3 className="heading3">CONFIDENTIAL INFORMATION</h3>
        <p className="textcontent">
          L&T-SARGENT & LUNDY discourages you from sending or posting to our
          website any information that you consider to be confidential or
          proprietary. Please note that if you do send or post any such
          information or material, L&T-SARGENT & LUNDY will assume that it is
          not confidential. By sending or posting any information or material,
          you grant L&T-SARGENT & LUNDY an unrestricted, irrevocable license to
          use, reproduce, display, perform, modify, transmit and distribute
          those materials or information, and you agree that L&T-SARGENT & LUNDY
          is free to use any ideas, concepts, know-how or techniques that you
          send or post for any purpose.
          <br />
          <br />
          This website and its contents are made available only to provide
          information about L&T-SARGENT & LUNDY. L&T-SARGENT & LUNDY has taken
          utmost care to provide correct information on this website but makes
          no representation or warranties regarding the correctness or
          completeness or any other aspect of this website or any of its
          content.
          <br />
          <br />
          L&T-SARGENT & LUNDY hereby disclaims all warranties and obligations
          with regard to the site or any content including all implied
          warranties and fitness for a particular purpose. The user shall be
          solely responsible for the use, including any risk of loss, resulting
          in any manner from any use of the website. In no event shall
          L&T-SARGENT & LUNDY or its members, officers or employees, be liable
          for any damages whatsoever, including without limitation special,
          indirect, consequential, or incidental damages, including without
          limitation, damages resulting from the use of, or reliance on, the
          information presented, or loss of profits or revenues.
        </p>
        <h3 className="heading3">COMMITMENT TO PRIVACY</h3>
        <p className="textcontent">
          Your privacy is important to us. We promise that we will take steps to
          use your personal information only in ways that are compatible with
          this Policy. We do not share, trade, sell or rent any of the
          individual personal information you provide with this site, although
          we may collect and/ or share aggregate data with such website.
        </p>
        <h3 className="heading3">LINKS TO OTHER WEBSITES</h3>
        <p className="textcontent">
          As a convenience, this website contains links to other websites
          operated by third parties that are not controlled by, or affiliated or
          associated with L&T-SARGENT & LUNDY. Accordingly we do not make any
          representations concerning the privacy practices or policies of such
          third parties or terms of use of such sites, nor does we control or
          guarantee the accuracy, integrity, or quality of the information,
          data, text, software, music, sound, photographs, graphics, videos,
          messages or other materials available on such sites. The inclusion or
          exclusion does not imply any endorsement by L&T-SARGENT & LUNDY of the
          site, the site's provider, or the information on the site.
        </p>
        <h3 className="heading3">GENERAL TERMS AND CONDITIONS</h3>
        <p className="textcontent">
          The above Terms and Conditions govern your use of the L&T-Sargent &
          Lundy Ltd web site and the materials available on or from this site.
          Please read these Terms and Conditions carefully before accessing the
          site. Please exit from this web site if you do not agree with any of
          the above Terms and Conditions.
        </p>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Disclaimer;
