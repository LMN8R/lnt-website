import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./copyright-terms.css";

function Copyright() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="main">
        <div className="pagetitle">
          <h1 className="heading">Copyright & Terms</h1>
        </div>
        <h3 className="heading3">Copyright & Terms</h3>
        <p className="textcontent">
          All rights reserved. Copyright in all material on this website vests
          in Larsen & Toubro Limited and is protected by Indian and
          International copyright and laws.
        </p>
        <h3 className="heading3">COPYRIGHT</h3>
        <p className="textcontent">
          All content included on this site, such as text, graphics, logos,
          button icons, images, audio clips, digital downloads, data
          compilations, and software, is the sole property of Larsen & Toubro
          Limited and protected by Indian and international copyright laws.
        </p>
        <h3 className="heading3">TRADEMARKS</h3>
        <p className="textcontent">
          The mark “L&T” and the Logo indicated on the top left of each page is
          the trademark of Larsen & Toubro Limited. All graphics, logos, page
          headers, button icons, scripts, and service names (collectively
          “Trademarks”) present and visible on this site are trademarks of
          Larsen & Toubro Limited. The Trademarks, mark “L&T” and the Logo may
          not be used in connection with any product or service that is not in
          any manner connected or provided by Larsen & Toubro Limited that is
          likely to cause confusion among customers, or in any manner that
          disparages or discredits Larsen & Toubro Limited. All other trademarks
          not owned by Larsen & Toubro Limited or its subsidiaries that appear
          on this site, are the property of their respective owners, who may or
          may not be affiliated with, connected to Larsen & Toubro Limited.
        </p>
        <h3 className="heading3">Discliamer and Terms of Use</h3>
        <p className="textcontent">
          By accessing and browsing the Larsen & Toubro (the “Company”) web site
          or by using and/or downloading any content from same, you agree and
          accept the Terms of Use as set forth below.
        </p>
        <h3 className="heading3">Purpose of the Web-Site</h3>
        <p className="textcontent">
          All the materials contained in the Company’s web site are on provided
          for informational purposes only and shall not be construed as a
          commercial offer, a license, an advisory, fiduciary or professional
          relationship between you and the Company. No information provided on
          this site shall be considered a substitute for your independent
          investigation. The information provided on this web site may be
          related to products or services that are not available in your
          country.
        </p>
        <h3 className="heading3">Links to Third-Party Web Sites</h3>
        <p className="textcontent">
          Links to third-party web sites are provided for convenience only and
          do not imply any approval or endorsement by the Company of the linked
          sites, even if they may contain the Company’s logo, as such sites are
          beyond the Company’s control. Thus, the Company cannot be held
          responsible for the content of any linked site or any link contained
          therein. You acknowledge that framing the Company’s website, or any
          similar process is prohibited.
        </p>
        <h3 className="heading3">Intellectual Property</h3>
        <p className="textcontent">
          This web site is the exclusive property of the Company. Any material
          that it contains, including, but not limited to, texts, data,
          graphics, pictures, sounds, videos, logos, icons or html code is
          protected under the intellectual property laws and remains the Company
          or third party’s property. You may use this material for personal and
          non-commercial purposes in accordance with the principles governing
          intellectual property laws. Any other use or modification of the
          content of the Company’s web site without the Company’s prior written
          authorisation is prohibited.
        </p>
        <h3 className="heading3">Warranty and Liability</h3>
        <p className="textcontent">
          All materials, including downloadable software, contained in the
          Company’s web site is provided on “as is” basis and without warranty
          of any kind to the extent allowed by the applicable law. While the
          Company will use reasonable efforts to provide reliable information
          through its web site, the Company does not warrant that this web site
          is free of inaccuracies, errors and/or omissions, viruses, worms,
          Trojan horses and the like, or that its content is appropriate for
          your particular use or up to date. The Company reserves the right to
          change the information at any time without notice. The Company does
          not warrant any results derived from the use of any software available
          on this site. You are solely responsible for any use of the materials
          contained in this site. The information contained in this site does
          not extend or modify the warranty that may apply to you as a result of
          a contractual relationship with the Company. The Company will not be
          liable for any indirect, consequential or incidental damages,
          including but not limited to loss of profits or revenues, business
          interruption, loss of data arising out of or in connection with the
          use, inability to use or reliance on any material contained in this
          site or any linked site.
        </p>
        <h3 className="heading3">Users's Comments</h3>
        <p className="textcontent">
          The Company does not assume any obligation to monitor the information
          that you may post on its web site. You warrant that any and all
          information projects, files or other attachments sent to us
          (“Material”) or comments other than personal data, that you may
          transmit to the Company through the web site does not infringe
          intellectual property rights or any other applicable law. Such
          information, Material or comments, will be treated as non-confidential
          and non proprietary. By submitting any information or Material, you
          give the Company an unlimited and irrevocable license to use, execute,
          show, modify and transmit such information, Material or comments,
          including any underlying idea, concept or know-how. The Company
          reserves the right to use such information in any way it chooses.
        </p>
        <h4 className="heading4">Applicable law - Severability</h4>
        <p className="textcontent">
          These Terms of Use are governed by the Indian Law. The courts in
          Mumbai have jurisdiction in relation to any claim or action arising
          out of, or in connection with, the Terms of Use. If any provision of
          these Terms of Use is held by a court to be illegal, invalid or
          unenforceable, the remaining provisions shall remain in full force and
          effect.
        </p>
        <h4 className="heading4">Modifications of the Terms of Use</h4>
        <p className="textcontent">
          The Company reserves the right to change the Terms of Use under which
          this web site is offered at any time and without notice. You will be
          automatically bound by these modifications when you use this site, and
          should periodically read the Terms of Use.
        </p>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Copyright;
