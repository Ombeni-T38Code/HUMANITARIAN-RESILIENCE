
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Shared Layout
import MainLayout from "./components/Layout/MainLayout";

// Main Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import Projects from "./pages/Projects/Projects";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Donate from "./pages/Donate/Donate";
import Contact from "./pages/Contact/Contact";

// What We Do Pages
import CommunityHealth from "./pages/WhatWeDo/CommunityHealth/CommunityHealth";
import PhysiotherapyRehabilitation from "./pages/WhatWeDo/PhysiotherapyRehabilitation/PhysiotherapyRehabilitation";
import EducationDigitalSkills from "./pages/WhatWeDo/EducationDigitalSkills/EducationDigitalSkills";
import WomenYouthEmpowerment from "./pages/WhatWeDo/WomenYouthEmpowerment/WomenYouthEmpowerment";
import ChildDevelopment from "./pages/WhatWeDo/ChildDevelopment/ChildDevelopment";
import PsychosocialSupport from "./pages/WhatWeDo/PsychosocialSupport/PsychosocialSupport";
import Livelihoods from "./pages/WhatWeDo/Livelihoods/Livelihoods";
import CommunityResilience from "./pages/WhatWeDo/CommunityResilience/CommunityResilience";

// Project Pages
import CommunityHealthEducation from "./pages/Projects/CommunityHealthEducation/CommunityHealthEducation";
import CommunityPhysiotherapy from "./pages/Projects/CommunityPhysiotherapy/CommunityPhysiotherapy";
import PsychosocialAwareness from "./pages/Projects/PsychosocialAwareness/PsychosocialAwareness";
import ChildcareLearning from "./pages/Projects/ChildcareLearning/ChildcareLearning";
import DigitalEducation from "./pages/Projects/DigitalEducation/DigitalEducation";
import WomensEnglishEducation from "./pages/Projects/WomensEnglishEducation/WomensEnglishEducation";
import SoapMaking from "./pages/Projects/SoapMaking/SoapMaking";
import YouthCodingDigitalSkills from "./pages/Projects/YouthCodingDigitalSkills/YouthCodingDigitalSkills";

// Get Involved Pages
import Volunteer from "./pages/GetInvolved/Volunteer/Volunteer";
import Partnerships from "./pages/GetInvolved/Partnerships/Partnerships";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />
          <Route path="/about/who-we-are" element={<About />} />
          <Route path="/about/our-team" element={<Team />} />

          {/* WHAT WE DO */}
          <Route path="/what-we-do" element={<WhatWeDo />} />

          <Route
            path="/what-we-do/community-health"
            element={<CommunityHealth />}
          />

          <Route
            path="/what-we-do/physiotherapy"
            element={<PhysiotherapyRehabilitation />}
          />

          <Route
            path="/what-we-do/education"
            element={<EducationDigitalSkills />}
          />

          <Route
            path="/what-we-do/education-digital-skills"
            element={<EducationDigitalSkills />}
          />

          <Route
            path="/what-we-do/women-youth-empowerment"
            element={<WomenYouthEmpowerment />}
          />

          <Route
            path="/what-we-do/child-development"
            element={<ChildDevelopment />}
          />

          <Route
            path="/what-we-do/psychosocial-support"
            element={<PsychosocialSupport />}
          />

          <Route
            path="/what-we-do/livelihoods"
            element={<Livelihoods />}
          />

          <Route
            path="/what-we-do/community-resilience"
            element={<CommunityResilience />}
          />

          {/* PROJECTS */}
          <Route path="/projects" element={<Projects />} />

          <Route
            path="/projects/community-health-education"
            element={<CommunityHealthEducation />}
          />

          <Route
            path="/projects/community-physiotherapy"
            element={<CommunityPhysiotherapy />}
          />

          <Route
            path="/projects/psychosocial-awareness"
            element={<PsychosocialAwareness />}
          />

          <Route
            path="/projects/childcare-learning"
            element={<ChildcareLearning />}
          />

          <Route
            path="/projects/digital-education"
            element={<DigitalEducation />}
          />

          <Route
            path="/projects/womens-english-education"
            element={<WomensEnglishEducation />}
          />

          <Route
            path="/projects/soap-making"
            element={<SoapMaking />}
          />

          <Route
            path="/projects/youth-coding-digital-skills"
            element={<YouthCodingDigitalSkills />}
          />

          {/* GET INVOLVED */}
          <Route path="/get-involved" element={<GetInvolved />} />

          <Route
            path="/get-involved/volunteer"
            element={<Volunteer />}
          />

          <Route
            path="/get-involved/partnerships"
            element={<Partnerships />}
          />

          {/* DONATE */}
          <Route path="/donate" element={<Donate />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={
              <main className="not-found-page">
                <div className="not-found-content">
                  <span>404</span>
                  <h1>Page Not Found</h1>
                  <p>
                    Sorry, the page you are looking for does not exist
                    or may have been moved.
                  </p>
                  <a href="/">Return to Homepage</a>
                </div>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
