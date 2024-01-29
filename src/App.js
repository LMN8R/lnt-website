import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LANDINGPAGEresp from "./pages/LANDINGPAGEresp";
import Investors from "./pages/Investors";
import Thermal from "./pages/Thermal";
// import Sectors from "./pages/Sectors";
// import Thermal from "./pages/Thermal";
// import Sectors1 from "./pages/Sectors1";
// import OURTEAM from "./pages/OURTEAM";
// import OURTEAM1 from "./pages/OURTEAM1";
// import PoliciesAndFrameworks from "./pages/PoliciesAndFrameworks";
import JVPARTNERS from "./pages/JVPARTNERS";
import OVERVIEW from "./pages/OVERVIEW";
// import Resp from "./pages/Resp";
// import Desktop1 from "./pages/Desktop1";
import MANAGEMENT from "./pages/MANAGEMENT";

import Copyright from "./pages/COPYRIGHT-TERMS";
import Disclaimer from "./pages/DISCLAIMER";
import Privacy from "./pages/PRIVACY";
import CONTACT from "./pages/CONTACT";
import Detail from "./pages/detail-engineering";


import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/investors":
        title = "";
        metaDescription = "";
        break;
      case "/thermal":
        title = "";
        metaDescription = "";
        break;
      // case "/sectors":
      //   title = "";
      //   metaDescription = "";
      //   break;
      // case "/thermal":
      //   title = "";
      //   metaDescription = "";
      //   break;
      // case "/sectors1":
      //   title = "";
      //   metaDescription = "";
      //   break;
      // case "/our-team":
      //   title = "";
      //   metaDescription = "";
      //   break;
      // case "/our-team1":
      //   title = "";
      //   metaDescription = "";
      //   break;
      // case "/policies-and-frameworks":
      //   title = "";
      //   metaDescription = "";
      //   break;
      case "/jv-partners":
        title = "";
        metaDescription = "";
        break;
      case "/overview":
        title = "";
        metaDescription = "";
        break;
      // case "/resp":
      //   title = "";
      //   metaDescription = "";
      //   break;
      // case "/desktop-1":
      //   title = "";
      //   metaDescription = "";
      //   break;
      case "/management":
        title = "";
        metaDescription = "";
        break;
     
      case "/copyright-terms":
        title = "Terms of Use";
        metaDescription = "";
        break;
      case "/privacy":
        title = "Privacy Policy";
        metaDescription = "";
        break;
      case "/disclaimer":
        title = "Disclaimer";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/detail-engineering":
        title = "Detail";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LANDINGPAGEresp />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/thermal" element={<Thermal />} />
      {/* <Route path="/sectors" element={<Sectors />} /> */}
      {/* <Route path="/thermal" element={<Thermal />} /> */}
      {/* <Route path="/sectors1" element={<Sectors1 />} /> */}
      {/* <Route path="/our-team" element={<OURTEAM />} /> */}
      {/* <Route path="/our-team1" element={<OURTEAM1 />} /> */}
      {/* <Route path="/policies-and-frameworks" element={<PoliciesAndFrameworks />} /> */}
      <Route path="/jv-partners" element={<JVPARTNERS />} />
      <Route path="/overview" element={<OVERVIEW />} />
      {/* <Route path="/resp" element={<Resp />} /> */}
      {/* <Route path="/desktop-1" element={<Desktop1 />} /> */}
      <Route path="/management" element={<MANAGEMENT />} />
      
      <Route path="/copyright-terms" element={<Copyright />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/contact" element={<CONTACT />} />
      <Route path="/detail-engineering" element={<Detail />} />
    </Routes>
  );
}
export default App;
